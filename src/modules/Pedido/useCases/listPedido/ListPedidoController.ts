import { Response, Request } from "express";
import { ListPedidoUseCase } from "./ListPedidoUseCase";

export class ListPedidoController {

  async handle(request: Request, response: Response) {

    const listPedidoUseCase = new ListPedidoUseCase()

    const pedidos = await listPedidoUseCase.execute()

    return response.status(200).json(pedidos)
  }
}