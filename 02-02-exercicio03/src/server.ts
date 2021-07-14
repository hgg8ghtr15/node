import express from "express"

import {usuarioRouter} from "./routes/usuario.router"

const app_chamado = express()
app_chamado.use(express.json())

app_chamado.use("/usuario", usuarioRouter)

app_chamado.get("/", (request, response)=>{
  response.send("Bem vindo 2.")
})

app_chamado.listen(4000, () => {
  console.log("Servidor online")
})