import { Categoria } from '../model/Categoria'

interface ICreateCategoriaDTO{
  nome: string;
  descricao:string;
}

class CategoriasRespositorio {

  private categorias: Categoria[]

  constructor() {
    this.categorias = []
  }
  // "Void nao retorna nada."
  create({nome, descricao}:ICreateCategoriaDTO): void {
    //construtor da class
    const categoria = new Categoria()
    //passando informações para a classe
    Object.assign(categoria, {
      nome,
      descricao,
      creat_at: new Date(),
    })

    this.categorias.push(categoria)
  }

  listar():Categoria[]{
    return this.categorias
  }

  findByNome(nome:string) {
    const categoria = this.categorias.find((categoria) => categoria.nome === nome)
    return categoria  
  }
}

export { CategoriasRespositorio }