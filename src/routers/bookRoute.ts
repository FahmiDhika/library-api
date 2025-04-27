import express from "express";
import multer from "multer";
import { addBook, deleteBook, editBook, getBook } from "../controllers/bookController";
import { verifyAddBook, verifyEditBook } from "../middlewares/verifyBook";
import { verifyToken, verifyRole } from "../middlewares/authorization";

const app = express();
app.use(express.json());
const upload = multer();

app.get(`/get`, [verifyToken, verifyRole([`ADMIN`, `STUDENT`])], getBook);
app.post(`/add`, [verifyToken, verifyRole([`ADMIN`]), upload.single(""), verifyAddBook], addBook);
app.put(`/edit/:bookId`, [verifyToken, verifyRole([`ADMIN`]), upload.single(""), verifyEditBook], editBook);
app.delete(`/delete/:bookId`, [verifyToken, verifyRole([`ADMIN`])], deleteBook)

export default app