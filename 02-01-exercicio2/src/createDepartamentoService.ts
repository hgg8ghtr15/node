

interface Departamento {
  id: string
  nome: string
}

class createDepartamentoService{

  execute({id, nome}:Departamento){
    console.log(id, nome)
  }
}

export default new createDepartamentoService()