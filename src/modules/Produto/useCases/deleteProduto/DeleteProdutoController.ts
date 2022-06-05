import { Response, Request } from "express";
import { DeleteProdutoUseCase } from "./DeleteProdutoUseCase";

export class DeletetProdutoController {

  async handle(request: Request, response: Response) {

    const { produto_id } = request.params

    const deleteProdutoUseCase = new DeleteProdutoUseCase()

    await deleteProdutoUseCase.execute(parseInt(produto_id))

    return response.status(200).send()
  }
}