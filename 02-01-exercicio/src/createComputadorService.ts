

interface Computador{
  id: number;
  nome: string;
  modelo: string;
}

class CreateComputadorService{

  execute({id, nome, modelo}: Computador){
    console.log(id, nome, modelo)
  }
}

export default new CreateComputadorService()