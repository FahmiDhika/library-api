import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getBook = async (request: Request, response: Response) => {
  try {
    const { search } = request.query;

    const getBook = await prisma.book.findMany({
      where: { bookName: { contains: search?.toString() || "" } },
    });

    response.status(200).json({
      status: true,
      data: getBook,
      message: `Book has been displayed.`,
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

export const addBook = async (request: Request, response: Response) => {
  try {
    const { bookName, bookType } = request.body;
    const uuid = uuidv4();

    const addBook = await prisma.book.create({
      data: {
        bookName,
        bookType,
        uuid,
      },
    });

    response.status(200).json({
      status: true,
      data: addBook,
      message: `New book have been added.`,
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

export const editBook = async (request: Request, response: Response) => {
  try {
    const { bookId } = request.params;
    const { bookName, bookType, status } = request.body;

    const findBook = await prisma.book.findFirst({
      where: { bookId: Number(bookId) },
    });

    if (!findBook) {
      response.status(200).json({
        status: false,
        message: `Book ${bookId} not found.`,
      });
    }

    const editBook = await prisma.book.update({
      data: {
        bookName: bookName || findBook?.bookName,
        bookType: bookType || findBook?.bookType,
        status: status || findBook?.status
      },
      where: { bookId: Number(bookId) },
    });

    response.status(200).json({
      status: true,
      data: editBook,
      message: `Book ${findBook?.bookName} has been updated.`,
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

export const deleteBook = async (request: Request, response: Response) => {
  try {
    const { bookId } = request.params;

    const findBook = await prisma.book.findFirst({
      where: { bookId: Number(bookId) },
    });

    if (!findBook) {
      response.status(200).json({
        status: false,
        message: `Book ${bookId} not found.`,
      });
    }

    const deleteBook = await prisma.book.delete({
      where: { bookId: Number(bookId) },
    });

    response.status(200).json({
      status: true,
      data: deleteBook,
      message: `Book ${findBook?.bookName} has been deleted.`,
    });
  } catch (error) {
    response.status(400).json({
      status: false,
      message: `There is an error ${error}`,
    });
    return;
  }
};
