
import { Categoria } from "../../entity/Categoria"
import { CategoriaRepository } from "../../repositories/implementations/CategoriaRepository"

export class ListCategoriaUseCase {

  async execute(): Promise<Categoria[]>{

    var categorias = await CategoriaRepository.find()

    return categorias
    
  }
}