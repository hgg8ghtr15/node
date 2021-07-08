import express from "express"
import {createDepartemaneto} from "./router"

const app = express()

app.get("/", createDepartemaneto)

app.listen(4444, () => {
  console.log("Servidor online")
})