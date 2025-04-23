import express from "express"
import cors from "cors"
import path from "path"

// router import
import userRouter from "./routers/userRoute"
import bookRouter from "./routers/bookRoute"

const app = express()
app.use(cors())

app.use("/user", userRouter)
app.use(`/book`, bookRouter)

app.use(express.static(path.join(__dirname, "..", "public")))

app.listen(4000, () => {
    console.log("Server run on port 4000")
})