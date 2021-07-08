import { Request, Response } from "express"
import createDepartamentoService from "./createDepartamentoService"
import { v4 as uuidv4 } from 'uuid'

export function createDepartemaneto(request: Request, response: Response) {

  const id1 = uuidv4()
  console.log(id1)

  createDepartamentoService.execute({
    id: id1,
    nome: "Departamento ti"
  })
  return response.send("Departamento criado com sucesso!")
}