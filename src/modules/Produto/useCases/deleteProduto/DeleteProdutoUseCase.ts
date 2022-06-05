import { AppError } from "../../../../error/AppError"
import { ProdutoRepository } from "../../repositories/Produto.repository"

export class DeleteProdutoUseCase {

  async execute(produto_id : number): Promise<void>{

    const produto = await ProdutoRepository.findOneBy({produto_id})

    if(!produto){
      throw new AppError("Produto não existe na base de dados", 404)
    }

    await ProdutoRepository.delete({produto_id})
    
  }
}