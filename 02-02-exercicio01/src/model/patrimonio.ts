import {v4 as uuidV4} from "uuid"

class Patrimonio{
  id:string;
  nome: string;
  numero: string;
  valor:number;
  local:string
  creat_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
    this.numero = "00"
    this.nome = "Não definido"
    this.valor = 0
    this.local = "Não definido"
    this.creat_at = new Date()
  }
}

export {Patrimonio}