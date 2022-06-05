import { AppError } from "../../../../error/AppError"
import { CategoriaRepository } from "../../../Categoria/repositories/implementations/CategoriaRepository"
import { Produto } from "../../entity/Produto"
import { IEditProdutoDTO, IProdutoDTO } from "../../interfaces/IProduto"
import { ProdutoRepository } from "../../repositories/Produto.repository"

export class EditProdutoUseCase {

  async execute({ produto_id, produto_descricao, produto_valor, categoria_id }: IEditProdutoDTO): Promise<Produto>{

    const produto = await ProdutoRepository.findOneBy({ produto_id })

    if(!produto){
      throw new AppError("Produto não existe na base de dados", 404)
    }

    var categoria = await CategoriaRepository.findOneBy({categoria_id})

    if (!categoria){
      throw new AppError("Categoria não existe na base de dados", 404)
    }

    produto.produto_descricao = produto_descricao
    produto.produto_valor = produto_valor
    produto.categoria = categoria

    await ProdutoRepository.save(produto)

    return produto
    
  }
}