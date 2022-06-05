import { Response, Request } from "express";
import { CreateMesaUseCase } from "./CreateMesaUseCase";

export class CreateMesaController {

  async handle(request: Request, response: Response) {

    const { mesa_id } = request.body

    const createMesaUseCase = new CreateMesaUseCase()

    const mesa = await createMesaUseCase.execute({mesa_id})

    return response.status(201).json(mesa)
  }
}