import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const borrowListSchema = Joi.object({
  bookId: Joi.number().required(),
});
