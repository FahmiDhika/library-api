import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import md5 from "md5";
import { BASE_URL, SECRET } from "../global";
import fs from "fs";
import { sign } from "jsonwebtoken";
import path from "path";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getUser = async (request: Request, response: Response) => {
  try {
    const { search } = request.query;

    const getUser = await prisma.user.findMany({
      where: { name: { contains: search?.toString() || "" } },
    });

    response.status(200).json({
      status: true,
      data: getUser,
      message: `User has been displayed.`,
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

export const newUser = async (request: Request, response: Response) => {
  try {
    const { name, email, password, role } = request.body;
    const uuid = uuidv4();

    let filename = "";

    if (request.file) {
      // update nama file dari foto yang di upload
      filename = request.file.filename;
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: md5(password),
        role,
        uuid: uuid,
        profilePicture: filename,
      },
    });

    response.status(200).json({
      status: true,
      data: newUser,
      message: `New user ${newUser.name} has created.`,
    });
  } catch (error) {
    response.status(400).json({
      status: false,
      message: `There is an error ${error}`,
    });
    return;
  }
};

export const updateUser = async (request: Request, response: Response) => {
  try {
    const { userId } = request.params;

    if (!userId || isNaN(Number(userId))) {
      response.status(400).json({
        status: false,
        message: "Invalid or missing userId in request params.",
      });
      return;
    }

    const { name, email, password } = request.body;

    const findUser = await prisma.user.findFirst({
      where: { userId: Number(userId) },
    });

    if (!findUser) {
      response.status(404).json({
        status: false,
        message: `User ${userId} not found.`,
      });
      return;
    }

    let filename = findUser.profilePicture;

    if (request.file) {
      filename = request.file.filename;

      const oldPath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        "profile_picture",
        findUser.profilePicture
      );

      if (fs.existsSync(oldPath) && findUser.profilePicture !== "") {
        fs.unlinkSync(oldPath);
      }
    }

    const updateUser = await prisma.user.update({
      data: {
        name: name || findUser.name,
        email: email || findUser.email,
        password: password ? md5(password) : findUser.password,
        profilePicture: filename,
      },
      where: { userId: Number(userId) },
    });

    response.status(200).json({
      status: true,
      data: updateUser,
      message: `User ${findUser.name} has been updated.`,
    });
    return;
  } catch (error) {
    response.status(500).json({
      status: false,
      message: `There is an error ${error}`,
    });
    return;
  }
};

export const deleteUser = async (request: Request, response: Response) => {
  try {
    const { userId } = request.params;

    if (!userId || isNaN(Number(userId))) {
      response.status(400).json({
        status: false,
        message: "Invalid or missing userId in request params.",
      });
      return;
    }

    const findUser = await prisma.user.findFirst({
      where: { userId: Number(userId) },
    });

    if (!findUser) {
      response.status(404).json({
        status: false,
        message: `User ${userId} not found.`,
      });
      return;
    }

    // Hapus foto profil user jika ada
    if (findUser.profilePicture && findUser.profilePicture !== "") {
      const oldPath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        "profile_picture",
        findUser.profilePicture
      );

      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    const deletedUser = await prisma.user.delete({
      where: { userId: Number(userId) },
    });

    response.status(200).json({
      status: true,
      data: deletedUser,
      message: `User ${findUser.name} has been deleted.`,
    });
    return;
  } catch (error) {
    response.status(500).json({
      status: false,
      message: `There is an error ${error}`,
    });
    return;
  }
};

export const authentication = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;

    const findUser = await prisma.user.findFirst({
      where: { email, password: md5(password) },
    });

    if (!findUser) {
      response.status(200).json({
        status: false,
        logged: false,
        message: `Email or password invalid.`,
      });
      return;
    }

    let data = {
      userId: findUser.userId,
      name: findUser.name,
      email: findUser.email,
      role: findUser.role,
    };

    let payload = JSON.stringify(data);

    let token = sign(payload, SECRET || "token");

    response.status(200).json({
      status: true,
      logged: true,
      message: `Login success`,
      token: token,
      data: data,
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
