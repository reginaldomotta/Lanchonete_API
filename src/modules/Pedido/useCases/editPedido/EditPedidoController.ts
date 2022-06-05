import { Response, Request } from "express";
import { EditPedidoUseCase } from "./EditPedidoUseCase";

export class EditPedidoController {

  async handle(request: Request, response: Response) {

    const pedido_id = parseInt(request.params.pedido_id)
    
    const { pedido_quantidade, produto_id } = request.body

    const editPedidoUseCase = new EditPedidoUseCase()

    const pedido = await editPedidoUseCase.execute({ pedido_id, pedido_quantidade, produto_id })

    return response.status(200).json(pedido)
  }
}