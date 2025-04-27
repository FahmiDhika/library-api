import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const borrowHistory = async (request: Request, response: Response) => {
  try {
    const { search, status, start_date, end_date } = request.query;

    // Bangun objek where dinamis
    const whereClause: any = {};

    // Filter berdasarkan search (misal judul buku)
    if (search && typeof search === "string") {
      whereClause.book = {
        title: {
          contains: search,
          mode: "insensitive",
        },
      };
    }

    // Filter berdasarkan status
    if (status && typeof status === "string") {
      whereClause.status = status;
    }

    // Filter tanggal peminjaman antara start_date dan end_date
    if (
      start_date &&
      end_date &&
      typeof start_date === "string" &&
      typeof end_date === "string"
    ) {
      whereClause.borrow_date = {
        gte: new Date(start_date),
        lte: new Date(end_date),
      };
    } else if (start_date && typeof start_date === "string") {
      whereClause.borrow_date = {
        gte: new Date(start_date),
      };
    } else if (end_date && typeof end_date === "string") {
      whereClause.borrow_date = {
        lte: new Date(end_date),
      };
    }

    // Ambil data peminjaman
    const getHistory = await prisma.borrow.findMany({
      where: whereClause,
      orderBy: {
        borrowingTime: "desc",
      },
      include: {
        borrowList: true, // includekan data buku terkait
        user: true, // includekan data user jika perlu
      },
    });

    response.status(200).json({
      status: true,
      data: getHistory,
    });
  } catch (error) {
    response.status(400).json({
      status: false,
      message: `There is an error ${error}`,
    });
    return;
  }
};

export const newBorrow = async (request: Request, response: Response) => {
  const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  try {
    const user = (request as any).user;
    const { note, borrowList } = request.body;

    const uuid = uuidv4();

    if (!borrowList || !Array.isArray(borrowList) || borrowList.length === 0) {
      response.status(400).json({
        status: false,
        message: "borrowList must be a non-empty array of book IDs",
      });
      return;
    }

    // Cek dan ubah status buku menjadi "BORROWED"
    for (let index = 0; index < borrowList.length; index++) {
      const { bookId } = borrowList[index];
      const book = await prisma.book.findFirst({
        where: {
          bookId: bookId,
          status: "READY", // Pastikan hanya buku yang tersedia yang bisa dipinjam
        },
      });
      if (!book) {
        response.status(400).json({
          status: false,
          message: `Book with id ${bookId} is not available or not found.`,
        });
        return;
      }

      // Ubah status buku menjadi "BORROWED"
      await prisma.book.update({
        where: { bookId: book.bookId },
        data: { status: "BORROWED" },
      });
    }

    // Get current borrowing time
    const borrowingTime = new Date();

    // Calculate returnTime (3 days after borrowingTime)
    const returnTime = addDays(borrowingTime, 3); // 3 days after borrowingTime

    // Create borrow record with returnTime set
    const newBorrow = await prisma.borrow.create({
      data: {
        uuid,
        userId: user.userId,
        note,
        borrowingTime,
        returnTime, // Set returnTime to 3 days later
      },
    });

    // Create borrowList records
    for (let index = 0; index < borrowList.length; index++) {
      const { bookId } = borrowList[index];
      const detailUuid = uuidv4();
      await prisma.borrowList.create({
        data: {
          uuid: detailUuid,
          borrowId: newBorrow.borrowId,
          bookId: Number(bookId),
        },
      });
    }

    response.status(201).json({
      status: true,
      message: "Books borrowed successfully!",
      data: newBorrow,
    });
    return;
  } catch (error) {
    response.status(400).json({
      status: false,
      message: `There is an error ${error}`,
    });
    return;
  }
};

export const updateBorrow = async (request: Request, response: Response) => {
  try {
    const { borrowId } = request.params;
    const { borrowStatus } = request.body;

    // Cek apakah borrow data ditemukan
    const findBorrow = await prisma.borrow.findUnique({
      where: { borrowId: Number(borrowId) },
      include: {
        borrowList: {
          include: {
            book: true, // Include data buku terkait untuk update status buku
          },
        },
      },
    });

    if (!findBorrow) {
      response.status(200).json({
        status: false,
        message: `Borrow data not found.`,
      });
      return;
    }

    // Update borrow status dan returnTime jika ada
    const updatedBorrow = await prisma.borrow.update({
      where: { borrowId: Number(borrowId) },
      data: {
        borrowStatus: borrowStatus ? borrowStatus : findBorrow.borrowStatus,
      },
    });

    // Jika borrowStatus adalah DONE, update status buku menjadi READY
    if (borrowStatus === "DONE") {
      const updateBooks = findBorrow.borrowList.map(async (borrowItem) => {
        await prisma.book.update({
          where: { bookId: borrowItem.bookId },
          data: { status: "READY" }, // Mengubah status buku menjadi "READY"
        });
      });

      // Tunggu semua update status buku selesai
      await Promise.all(updateBooks);
    }

    response.status(200).json({
      status: true,
      data: updatedBorrow,
      message: `Borrow data updated successfully.`,
    });
    return;
  } catch (error) {
    response.status(400).json({
      status: false,
      message: `There is an error ${error}`,
    });
    return;
  }
};

export const deleteBorrow = async (request: Request, response: Response) => {
  try {
    const { borrowId } = request.params;

    const findBorrow = await prisma.borrow.findUnique({
      where: { borrowId: Number(borrowId) },
      include: {
        borrowList: {
          include: {
            book: true, // Include data buku terkait untuk update status buku
          },
        },
      },
    });

    if (!findBorrow) {
      response.status(400).json({
        status: false,
        message: "Borrow data not found.",
      });
      return;
    }

    let deleteBorrowLit = await prisma.borrowList.deleteMany({
      where: { borrowId: Number(borrowId) },
    });

    let deleteBorrow = await prisma.borrow.delete({
      where: { borrowId: Number(borrowId) },
    });

    response.status(200).json({
      status: true,
      data: deleteBorrow,
      message: "Borrow data has deleted.",
    });
    return;
  } catch (error) {
    response.status(400).json({
      status: false,
      message: `There is an error ${error}`,
    });
    return;
  }
};
