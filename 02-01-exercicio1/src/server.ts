import express from "express"
import {createPessoa} from "./router"

const app = express()

app.get("/", createPessoa)

app.listen(4444, () => {
  console.log("Server online")
})