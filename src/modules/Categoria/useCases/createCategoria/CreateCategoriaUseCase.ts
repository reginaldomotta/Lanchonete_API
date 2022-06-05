import { AppError } from "../../../../error/AppError"
import { Categoria } from "../../entity/Categoria"
import { ICategoriaDTO } from "../../interfaces/ICategoria"
import { CategoriaRepository } from "../../repositories/implementations/CategoriaRepository"


export class CreateCategoriaUseCase {

  async execute({categoria_descricao}: ICategoriaDTO): Promise<Categoria>{

    var categoria = await CategoriaRepository.findOneBy({categoria_descricao})

    if(categoria){
      throw new AppError("Categoria já existe na base de dados", 400)
    }

    categoria = CategoriaRepository.create({
      categoria_descricao
    })

    await CategoriaRepository.save(categoria)

    return categoria
    
  }
}