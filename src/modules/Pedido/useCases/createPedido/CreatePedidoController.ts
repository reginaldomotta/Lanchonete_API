import { Response, Request } from "express";
import { CreatePedidoUseCase } from "./CreatePedidoUseCase";

export class CreatePedidoController {

  async handle(request: Request, response: Response) {

    const { mesa_id, pedido_quantidade, produto_id } = request.body

    const createPedidoUseCase = new CreatePedidoUseCase()

    const pedido = await createPedidoUseCase.execute({mesa_id, pedido_quantidade, produto_id})

    return response.status(201).json(pedido)
  }
}