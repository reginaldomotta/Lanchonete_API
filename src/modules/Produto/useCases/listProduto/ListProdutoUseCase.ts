
import { Produto } from "../../entity/Produto"
import { ProdutoRepository } from "../../repositories/Produto.repository"

export class ListProdutoUseCase {

  async execute(): Promise<Produto[]>{

    var produtos = await ProdutoRepository.find({relations: {
      categoria: true
    } })

    return produtos
    
  }
}