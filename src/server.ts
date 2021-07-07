import express from "express"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import { cathErrors } from "./middlewares/catchErrors"
import { routes } from "./routes"

const app = express()
const PORT = 4000

app.use(express.json())
app.use(routes)
app.use(cathErrors)

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`) 
})
