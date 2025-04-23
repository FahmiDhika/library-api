import express from "express";
import { authentication, deleteUser, getUser, newUser, updateUser } from "../controllers/userController";
import { verifyAuthentication, verifyNewUser, verifyUpdateUser } from "../middlewares/verifyUser";
import uploadFile from "../middlewares/userUpload";
import { verifyRole, verifyToken } from "../middlewares/authorization";

const app = express();
app.use(express.json())

app.get(`/get`, [verifyToken, verifyRole([`ADMIN`])], getUser);
app.post(`/new`, [verifyToken, verifyRole([`ADMIN`]), uploadFile.single("profilePicture"), verifyNewUser], newUser);
app.post(`/login`, verifyAuthentication, authentication)
app.put(`/update/:userId`, [verifyToken, verifyRole([`STUDENT`]), uploadFile.single("profilePicture"), verifyUpdateUser], updateUser);
app.delete(`/delete/:userId`, [verifyToken, verifyRole([`ADMIN`])], deleteUser)

export default app;
