import { Response, Request } from "express";
import { ListProdutoUseCase } from "./ListProdutoUseCase";

export class ListProdutoController {

  async handle(request: Request, response: Response) {

    const listProdutoUseCase = new ListProdutoUseCase()

    const produtos = await listProdutoUseCase.execute()

    return response.status(200).json(produtos)
  }
}