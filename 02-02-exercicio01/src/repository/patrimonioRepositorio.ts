import {Patrimonio} from "../model/patrimonio"

interface IpatrimonioDTO{
  numero:string;
  nome: string;
  valor:number;
  local:string
}

class PatrimonioRespositorio{

  private patrimonios:Patrimonio[]

  constructor(){
    this.patrimonios =[]
  }

  create({numero, nome, valor, local}:IpatrimonioDTO):void{
    const patrimonio = new Patrimonio()
    Object.assign(patrimonio, 
      {
        numero,
        nome, 
        valor, 
        local, 
        creat_at:new Date()
      }
    )
    this.patrimonios.push(patrimonio)
  }

  listar():Patrimonio[]{
    const patrimonios = this.patrimonios
    return patrimonios
  }

  findByNumero(numero:string){
    const patrimonio = this.patrimonios.find((patrimonio) => patrimonio.numero == numero)
    return patrimonio
  }

}

export {PatrimonioRespositorio}
