import { Response, Request } from "express";
import { EditProdutoUseCase } from "./EditProdutoUseCase";

export class EditProdutoController {

  async handle(request: Request, response: Response) {

    const produto_id = parseInt(request.params.produto_id)
    
    const { produto_descricao, produto_valor, categoria_id } = request.body

    const editProdutoUseCase = new EditProdutoUseCase()

    const produto = await editProdutoUseCase.execute({ produto_id, produto_descricao, produto_valor, categoria_id })

    return response.status(200).json(produto)
  }
}