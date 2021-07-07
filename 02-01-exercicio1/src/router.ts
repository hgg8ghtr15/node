import {Request, Response} from "express"
import CreatePessoaService from "./CreatePessoaService"

export function createPessoa(request: Request, response: Response){
  CreatePessoaService.execute(
    {nome:"Fabio", idade: 10, sexo: "Masculino"}
  )
  return response.send("Pessoa Criada com sucesso!")
}
