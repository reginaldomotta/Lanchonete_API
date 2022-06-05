import { Response, Request } from "express";
import { EditCategoriaUseCase } from "./EditCategoriaUseCase";

export class EditCategoriaController {

  async handle(request: Request, response: Response) {

    const categoria_id = parseInt(request.params.categoria_id)
    
    const { categoria_descricao } = request.body

    const editCategoriaUseCase = new EditCategoriaUseCase()

    const categoria = await editCategoriaUseCase.execute({categoria_id, categoria_descricao})

    return response.status(200).json(categoria)
  }
}