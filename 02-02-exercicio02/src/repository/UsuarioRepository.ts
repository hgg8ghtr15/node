import {Usuario} from "../model/Usuario"

interface IUsuarioDTC{
  nome: string;
  email: string;
  senha: string;
}

class UsurioRepository {

  private lista_usuarios: Usuario []

  constructor() {
    this.lista_usuarios = []
  }

  criar({ nome, email, senha}:IUsuarioDTC):void{
    const usuario = new Usuario()
    Object.assign(usuario, { nome, email, senha })
  
    this.lista_usuarios.push(usuario)
  }

  listar():Usuario[]{
    return this.lista_usuarios
  }

  findByNome(nome:string){
    const usuario = this.lista_usuarios.find((usuario) => usuario.nome === nome)
    return usuario
  }

}

export {UsurioRepository}
