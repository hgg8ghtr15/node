import { v4 as uuidv4 } from "uuid"

class Usuario {
  id?: string;
  nome: string;
  email: string;
  senha: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
    this.nome = "Fabio"
    this.email = "fabio@gmail.com"
    this.senha = "1234"
  }


}
export { Usuario }