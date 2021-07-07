import {Request, Response} from "express"
import CreateChamadoService from "./CreateChamadoService"

export function createChamado(request: Request, response: Response){
  
  CreateChamadoService.execute(
    {
      nome: "Chamado 1",
      descricao: "Descrição 1",
      patrimonio:10
    }
  )

  return response.json({message: "Criado com sucesso."})
}