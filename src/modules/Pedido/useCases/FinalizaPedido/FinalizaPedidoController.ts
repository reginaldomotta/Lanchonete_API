import { Response, Request } from "express";
import { FinalizaPedidoUseCase } from "./FinalizaPedidoUseCase";

export class FinalizaPedidoController {

  async handle(request: Request, response: Response) {

    const { pedido_id } = request.params

    const deletePedidoUseCase = new FinalizaPedidoUseCase()

    const valor = await deletePedidoUseCase.execute(parseInt(pedido_id))

    return response.status(200).json({"total": valor})
  }
}