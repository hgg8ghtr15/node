import {Router} from "express"
//sobre-escreve a função
import {v4 as uuidv4} from "uuid"
import { Categoria } from "../model/Categoria";
import {CategoriasRespositorio} from "../repository/CategoriasRespositorio"

const categoriaRouter = Router()
const categoriasRespositorio =  new CategoriasRespositorio()

// const categorias: Categoria[] = []

categoriaRouter.post("/criar",  (request, response) => {
  const {nome, descricao} = request.body
  
  const categoria = categoriasRespositorio.findByNome(nome)
  
  if (categoria){
    console.log(categoria)
    return response.send("Categoria Existente!")
  }

  categoriasRespositorio.create({nome, descricao})
  return response.send("Categoria adicionada com sucesso!")
})

categoriaRouter.get("/listar", (request, response) => {
  const lista_categoria = categoriasRespositorio.listar()
  return response.json(lista_categoria)
})

export {categoriaRouter}