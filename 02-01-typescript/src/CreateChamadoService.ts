
/*

*/

interface Chamado {
  nome: string;
  descricao?: string;
  patrimonio:number;
}

class CreateChamadoService {

  execute({nome, descricao = "Não informado", patrimonio}:Chamado){
    console.log(nome, descricao, patrimonio)
  }
}

export default new CreateChamadoService()