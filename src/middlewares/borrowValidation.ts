import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const borrowListSchema = Joi.object({
  bookId: Joi.number().required(),
});

export const borrowSchema = Joi.object({
  userId: Joi.number().optional(),
  note: Joi.string().optional(),
  borrowList: Joi.array().items(borrowListSchema).min(1).required(),
});

export const updateBorrowSchema = Joi.object({
  userId: Joi.number().optional(),
  borrowStatus: Joi.string().valid(`BORROWED`, `DONE`).required(),
  returnTime: Joi.date().greater(Joi.ref("borrowingTime")).optional(),
});

export const verifyBorrowBook = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = borrowSchema.validate(request.body, { abortEarly: false });

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

export const verifyUpdateBorrow = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = updateBorrowSchema.validate(request.body, {
    abortEarly: false,
  });

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
