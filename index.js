import dotenv from "dotenv"
import express from "express"
import healthCheckRouter from "./src/routes/healthcheck.routes.js"

dotenv.config({
  path: "./.env"
})

const app = express()
const PORT = process.env.PORT || 7000

// routes
app.use('/', healthCheckRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})