import express from "express"

const app = express()

app.get("/", (request, response)=>{
  return response.send("Bem Vindo.")
})

app.listen(4000, ()=>{console.log("Servidor online")})