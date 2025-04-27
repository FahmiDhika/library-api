import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { bookType } from "../../generated/prisma";

export const addBookSchema = Joi.object({
  bookName: Joi.string().required(),
  bookType: Joi.string()
    .valid(
      `RANDOM`,
      `HISTORY`,
      `COMIC`,
      `NOVEL`,
      `ENCYCLOPEDIA`,
      `SCIENCE`,
      `BIOGRAPHY`
    )
    .required(),
  status: Joi.string().valid(`BORROWED`, `READY`).optional(),
});

export const editBookSchema = Joi.object({
  bookName: Joi.string().optional(),
  bookType: Joi.string()
    .valid(
      `RANDOM`,
      `HISTORY`,
      `COMIC`,
      `NOVEL`,
      `ENCYCLOPEDIA`,
      `SCIENCE`,
      `BIOGRAPHY`
    )
    .optional(),
  status: Joi.string().valid(`BORROWED`, `READY`).optional(),
});

export const verifyAddBook = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = addBookSchema.validate(request.body, { abortEarly: false });

  if (error) {
    response
      .json({
        status: false,
        message: error.details.map((it) => it.message).join(),
      })
      .status(400);
    return;
  }
  return next();
};

export const verifyEditBook = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // validasi data dari request body dan mengambil info error jika terdapat error
  const { error } = editBookSchema.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    // jika terdapat error, akan memberikan pesan seperti ini
    response
      .json({
        status: false,
        message: error.details.map((it) => it.message).join(),
      })
      .status(400);
    return;
  }
  return next();
};
