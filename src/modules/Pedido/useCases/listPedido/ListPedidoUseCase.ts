
import { Pedido } from "../../entity/Pedido"
import { PedidoRepository } from "../../repositories/Pedido.repository"

export class ListPedidoUseCase {

  async execute(): Promise<Pedido[]>{

    var pedidos = await PedidoRepository.find({
      relations: {
        mesa: true,
        produtos: true
      }
    })

    return pedidos
    
  }
}