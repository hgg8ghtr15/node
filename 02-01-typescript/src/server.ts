import express from "express"
import {createChamado} from "./routes"

const app = express()
app.use(express.json())

app.get('/', createChamado) 

app.listen(4444, () => {
  console.log("Servidor online")
})