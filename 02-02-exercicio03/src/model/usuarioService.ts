import {v4 as uuidV4} from "uuid"

class Usuario{
  id? : string;
  nome: string;
  email : string;
  senha: string;

  constructor() {
    if (!this.id){
      this.id = uuidV4()
    }
    this.nome = ""
    this.email = ""
    this.senha = ""
  }
}
export { Usuario}