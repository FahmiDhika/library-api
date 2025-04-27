import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

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
  try {
    const { userId, note, borrowList } = request.body;
    const borrow = await prisma.borrow.create({
      data: {
        userId,
        note,
        borrowList: {
          create: borrowList.map((item: { bookId: number }) => ({
            bookId: item.bookId,
          })),
        },
      },
      include: { borrowList: true },
    });

    response.status(200).json({
      status: true,
      data: borrow,
      message: `You have successfully borrow a book`,
    });
  } catch (error) {
    response.status(400).json({
      status: false,
      message: `There is an error ${error}`,
    });
    return;
  }
};