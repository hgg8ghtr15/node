import express from "express"
import {patrimioRouter} from "./routes/patrimonio.router"

const app = express()

app.use(express.json())
app.use("/patrimonio",patrimioRouter)

app.get("/", (request, response)=>{
  return response.send("Bem Vindo.")
})

app.listen(4000, ()=>{console.log("Servidor online")})