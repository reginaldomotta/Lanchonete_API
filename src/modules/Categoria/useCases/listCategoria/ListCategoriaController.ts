import { Response, Request } from "express";
import { ListCategoriaUseCase } from "./ListCategoriaUseCase";

export class ListCategoriaController {

  async handle(request: Request, response: Response) {

    const listCategoriaUseCase = new ListCategoriaUseCase()

    const categorias = await listCategoriaUseCase.execute()

    return response.status(200).json(categorias)
  }
}