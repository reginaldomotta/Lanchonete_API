import { Response, Request } from "express";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";

export class CreateProdutoController {

  async handle(request: Request, response: Response) {

    const { produto_descricao, produto_valor, categoria_id } = request.body

    const createProdutoUseCase = new CreateProdutoUseCase()

    const produto = await createProdutoUseCase.execute({produto_descricao, produto_valor, categoria_id})

    return response.status(201).json(produto)
  }
}