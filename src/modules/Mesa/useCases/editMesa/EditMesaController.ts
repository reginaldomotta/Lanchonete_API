import { Response, Request } from "express";
import { EditMesaUseCase } from "./EditMesaUseCase";

export class EditMesaController {

  async handle(request: Request, response: Response) {

    const mesa_id = parseInt(request.params.mesa_id)
    
    const { mesa_abertura, mesa_fechamento, mesa_status } = request.body

    const editMesaUseCase = new EditMesaUseCase()

    const mesa = await editMesaUseCase.execute({ mesa_id, mesa_abertura, mesa_fechamento, mesa_status })

    return response.status(200).json(mesa)
  }
}