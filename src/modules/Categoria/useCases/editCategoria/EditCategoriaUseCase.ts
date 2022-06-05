import { AppError } from "../../../../error/AppError"
import { Categoria } from "../../entity/Categoria"
import { IEditCategoriaDTO } from "../../interfaces/ICategoria"
import { CategoriaRepository } from "../../repositories/implementations/CategoriaRepository"

export class EditCategoriaUseCase {

  async execute({categoria_id, categoria_descricao}: IEditCategoriaDTO): Promise<Categoria>{

    const categoria = await CategoriaRepository.findOneBy({categoria_id})

    if(!categoria){
      throw new AppError("Categoria não existe na base de dados", 404)
    }

    categoria.categoria_descricao = categoria_descricao

    await CategoriaRepository.save(categoria)

    return categoria
    
  }
}