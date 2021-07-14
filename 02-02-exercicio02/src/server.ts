import express from "express"
import { usuarioRouter } from "./routes/Usuario.Router"

const app_usuario = express()
app_usuario.use(express.json())

app_usuario.use("/usuario", usuarioRouter)

app_usuario.listen(4000, () => { console.log("Serviodr Online") })