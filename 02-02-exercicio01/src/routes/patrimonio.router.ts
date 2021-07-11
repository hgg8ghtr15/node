import {Router} from "express"
import {Patrimonio} from "../model/patrimonio"
import {PatrimonioRespositorio} from "../repository/patrimonioRepositorio"

const patrimioRouter = Router()
const patrimonioRepositorio = new PatrimonioRespositorio

patrimioRouter.post("/criar", (request, response) =>{
  const {numero, nome, valor, local} = request.body
  
  const patrimonio = patrimonioRepositorio.findByNumero(numero)
  
  if (patrimonio){
    return response.send("Patrimonio Existente!")
  }

  patrimonioRepositorio.create({numero,nome, valor, local})
  console.log("Criado")
  return response.send("Patrimonio Criado com sucesso!")
})
patrimioRouter.get("/listar", (request, response) =>{
  const patrimonios = patrimonioRepositorio.listar()
  return response.json(patrimonios)
})

export {patrimioRouter}
