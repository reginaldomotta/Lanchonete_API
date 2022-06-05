import { AppError } from "../../../../error/AppError"
import { CategoriaRepository } from "../../../Categoria/repositories/implementations/CategoriaRepository"
import { Produto } from "../../entity/Produto"
import { IProdutoDTO } from "../../interfaces/IProduto"
import { ProdutoRepository } from "../../repositories/Produto.repository"


export class CreateProdutoUseCase {

  async execute({produto_descricao, produto_valor, categoria_id}: IProdutoDTO): Promise<Produto>{

    var produto = await ProdutoRepository.findOneBy({produto_descricao})

    if(produto){
      throw new AppError("Produto já existe na base de dados", 400)
    }

    var categoria = await CategoriaRepository.findOneBy({categoria_id})

    if (!categoria){
      throw new AppError("Categoria não existe na base de dados", 404)
    }

    produto = ProdutoRepository.create({
      produto_descricao,
      produto_valor,
      categoria
    })

    await ProdutoRepository.save(produto)

    return produto
    
  }
}