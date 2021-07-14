import { Router } from "express"
import { Usuario } from "../model/Usuario"
import { UsurioRepository } from "../repository/UsuarioRepository"

const usuarioRouter = Router()
const usuarioRepository = new UsurioRepository()

usuarioRouter.get("/", (request, response) => {
  return response.send("Teste")
})

usuarioRouter.post("/criar", (request, response) => {
  const { nome, email, senha } = request.body
  const usuario = usuarioRepository.findByNome(nome)
  console.log(usuario)
  if (usuario){
    console.log("Usuario já existe!")
    return response.send("Usuario já existe!")
  }
  usuarioRepository.criar({ nome, email, senha})  
  return response.send("Usuario criado com sucesso")
})

usuarioRouter.get("/listar", (request, response) => {
  const lista_usurios = usuarioRepository.listar()
  return response.json(lista_usurios)
})

export { usuarioRouter }