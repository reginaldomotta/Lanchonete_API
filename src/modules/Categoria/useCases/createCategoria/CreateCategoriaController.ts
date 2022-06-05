import { Response, Request } from "express";
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";

export class CreateCategoriaController {

  async handle(request: Request, response: Response) {

    const { categoria_descricao } = request.body

    const createCategoriaUseCase = new CreateCategoriaUseCase()

    const categoria = await createCategoriaUseCase.execute({categoria_descricao})

    return response.status(201).json(categoria)
  }
}