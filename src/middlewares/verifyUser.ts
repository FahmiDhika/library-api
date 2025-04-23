import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const newUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).alphanum().required(),
  role: Joi.string().valid(`ADMIN`, `STUDENT`).optional(),
  profilePicture: Joi.allow().optional(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(8).alphanum().optional(),
  profilePicture: Joi.allow().optional(),
});

export const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).alphanum().required(),
});

export const verifyAuthentication = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { error } = authSchema.validate(request.body, { abortEarly: false });

  if (error) {
    response.status(200).json({
      status: false,
      message: error.details.map((it) => it.message).join(),
    });
    return;
  }
  return next();
};

export const verifyNewUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // validasi data dari request body dan mengambil info error jika terdapat error
  const { error } = newUserSchema.validate(request.body, { abortEarly: false });

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

export const verifyUpdateUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // validasi data dari request body dan mengambil info error jika terdapat error
  const { error } = updateUserSchema.validate(request.body, {
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
