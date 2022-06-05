
import { ProdutoRepository } from "../../repositories/Produto.repository"

export class ListRefrigeranteProdutoUseCase {

  async execute(){

    var produtos = await ProdutoRepository.query(`
    SELECT produto_descricao, produto_valor
    FROM produto
    WHERE categoria_id = (SELECT categoria_id FROM CategoriaID)`)

    return produtos
    
  }
}