import express from "express"
import { borrowHistory, deleteBorrow, newBorrow, updateBorrow } from "../controllers/borrowController"
import { verifyToken, verifyRole } from "../middlewares/authorization"
import { verifyBorrowBook, verifyUpdateBorrow } from "../middlewares/borrowValidation"

const app = express()
app.use(express.json())

app.get(`/history`, [verifyToken, verifyRole([`ADMIN`, `STUDENT`])], borrowHistory)
app.post(`/new`, [verifyToken, verifyRole([`STUDENT`]), verifyBorrowBook], newBorrow)
app.put(`/update/:borrowId`, [verifyToken, verifyRole([`ADMIN`]), verifyUpdateBorrow], updateBorrow)
app.delete(`/delete/:borrowId`, [verifyToken, verifyRole([`ADMIN`])], deleteBorrow)

export default app