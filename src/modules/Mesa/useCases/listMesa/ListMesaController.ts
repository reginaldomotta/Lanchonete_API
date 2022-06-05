import { Response, Request } from "express";
import { ListMesaUseCase } from "./ListMesaUseCase";

export class ListMesaController {

  async handle(request: Request, response: Response) {

    const listMesaUseCase = new ListMesaUseCase()

    const mesas = await listMesaUseCase.execute()

    return response.status(200).json(mesas)
  }
}