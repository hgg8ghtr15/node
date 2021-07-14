import {Router} from "express"
import { Usuario } from "../model/usuarioService"
import { UsuarioRepository } from "../repository/usuarioRepositorio"
const usuarioRouter = Router()

const usuarioRepository = new UsuarioRepository()

usuarioRouter.get("/", (request, response)=>{
  return response.send("Rota usuario")
})

usuarioRouter.get("/listar", (request, response)=>{
  const listarUsuarios = usuarioRepository.listar()
  return response.json(listarUsuarios)
})

usuarioRouter.post("/criar", (request, response)=>{
  const {nome, email, senha} = request.body

  const usuario = usuarioRepository.findByNome(nome)
  if (usuario){
    return response.send("Este usuario já existe.")
  }
  
  usuarioRepository.criar({ nome, email, senha})
  return response.send("Criado com sucesso")
})

export { usuarioRouter}