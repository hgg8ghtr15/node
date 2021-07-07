import express from "express"
import {createComputador} from "./routes"

const app = express()

app.get("/", createComputador)

app.listen(4444, () => {
  console.log("Server online")
})