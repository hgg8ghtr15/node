

interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
}

class CreatePessoaService{
  execute({nome, idade, sexo}:Pessoa){
    console.log(nome, idade, sexo)
  }
}

export default new CreatePessoaService()