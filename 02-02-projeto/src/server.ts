import express from "express"

const app = express()
app.use(express.json())

app.get("/", (request, response) => {
  return response.send("Teste")
})

app.post("/cursos", (request, response) => {
  const {nome} = request.body
  console.log(nome)
  return response.json({nome})
})

app.listen(4000, () => {
  console.log("server online")
})