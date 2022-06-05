import { Response, Request } from "express";
import { DeleteCategoriaUseCase } from "./DeleteCategoriaUseCase";

export class DeletetCategoriaController {

  async handle(request: Request, response: Response) {

    const { categoria_id } = request.params

    const deleteCategoriaUseCase = new DeleteCategoriaUseCase()

    await deleteCategoriaUseCase.execute(parseInt(categoria_id))

    return response.status(200).send()
  }
}