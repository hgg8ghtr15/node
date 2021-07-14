import { Usuario } from "../model/usuarioService"

interface IUsuarioDTC{
  nome: string;
  email: string;
  senha: string;
}

class UsuarioRepository{
  private lista_usuarios: Usuario[]

  constructor() {
    this.lista_usuarios = []
  }

  listar():Usuario[]{
    return this.lista_usuarios
  }
  
  criar({nome, email, senha}:IUsuarioDTC):void{
    const usuario = new Usuario()
    Object.assign(usuario, { nome, email, senha })
    this.lista_usuarios.push(usuario)
  }

  findByNome(nome:string){
    const usuario = this.lista_usuarios.find((usuario) => usuario.nome === nome)
    return usuario
  }

}

export {UsuarioRepository}
