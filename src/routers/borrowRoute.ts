import express from "express"
import { borrowHistory } from "../controllers/borrowController"

const app = express()
app.use(express.json())

app.get(`/history`, borrowHistory)

export default app