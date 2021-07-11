import {v4 as uuidv4} from "uuid"

class Categoria {
  id?: string;
  nome: string;
  descricao: string;
  creat_at : Date;
  
  constructor(){
    if (!this.id){
      this.id = uuidv4()
      console.log(this.id)
    }
    this.nome = "SUV"
    this.descricao = "Carro SUV"
    this.creat_at = new Date();
  }
}

export {Categoria}