import { AppError } from "../../../../error/AppError"
import { CategoriaRepository } from "../../repositories/implementations/CategoriaRepository"

export class DeleteCategoriaUseCase {

  async execute(categoria_id : number): Promise<void>{

    const categoria = await CategoriaRepository.findOneBy({categoria_id})

    if(!categoria){
      throw new AppError("Categoria não existe na base de dados", 404)
    }

    await CategoriaRepository.delete({categoria_id})
    
  }
}