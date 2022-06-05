import { Response, Request } from "express";
import { ListRefrigeranteProdutoUseCase } from "./ListRefrigeranteProdutoUseCase";

export class ListRefrigeranteProdutoController {

  async handle(request: Request, response: Response) {

    const listRefrigeranteProdutoUseCase = new ListRefrigeranteProdutoUseCase()

    const produtos = await listRefrigeranteProdutoUseCase.execute()

    return response.status(200).json(produtos)
  }
}