import { AppError } from "../../../../error/AppError"
import { MesaRepository } from "../../../Mesa/repositories/implementations/Mesa.repository"
import { Pedido } from "../../entity/Pedido"
import { IPedidoDTO } from "../../interfaces/IPedido"
import { PedidoRepository } from "../../repositories/Pedido.repository"

export class CreatePedidoUseCase {

  async execute({mesa_id}: IPedidoDTO): Promise<Pedido>{

    const mesa = await MesaRepository.findOneBy({ mesa_id })

    if(!mesa){
      throw new AppError("Mesa não existe na base de dados", 404)
    }

    if (mesa.mesa_status == false){
      throw new AppError("Mesa não finalizada, escolha outra mesa", 404)
    }

    mesa.mesa_status = false
    mesa.mesa_abertura = new Date()

    const pedido_quantidade = ""

    const pedido = PedidoRepository.create({
      mesa,
      pedido_quantidade
    })

    await PedidoRepository.save(pedido)

    return pedido
    
  }
}