import {Request, Response} from 'express'
import CreateComputadorService from "./createComputadorService"

export function createComputador(request: Request, response: Response){

  CreateComputadorService.execute({
    id:10,
    nome: "Dell", 
    modelo: "XPG1020"
  })
  return response.send("Computador criado com sucesso!")
}