import { Response, Request } from "express";
import { DeleteMesaUseCase } from "./DeleteMesaUseCase";

export class DeletetMesaController {

  async handle(request: Request, response: Response) {

    const { mesa_id } = request.params

    const deleteMesaUseCase = new DeleteMesaUseCase()

    await deleteMesaUseCase.execute(parseInt(mesa_id))

    return response.status(200).send()
  }
}