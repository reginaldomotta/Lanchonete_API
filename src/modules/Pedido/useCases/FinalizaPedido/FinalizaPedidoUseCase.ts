import { AppError } from "../../../../error/AppError"
import { MesaRepository } from "../../../Mesa/repositories/implementations/Mesa.repository"
import { PedidoRepository } from "../../repositories/Pedido.repository"

export class FinalizaPedidoUseCase {

  async execute(pedido_id : number): Promise<number>{

    const pedido = await PedidoRepository.findOne({
      where: {
        pedido_id: pedido_id
      },
      relations: {
        produtos: true,
        mesa: true
      }
    })

    if(!pedido){
      throw new AppError("Pedido não existe na base de dados", 404)
    }

    const arrayQtd = pedido.pedido_quantidade.split(" ")

    const qtdProdutos = pedido.produtos.length
    
    let total = 0

    for (let i = 0; i < qtdProdutos ; i++){
      total = total + (parseInt(arrayQtd[i]) * pedido.produtos[i].produto_valor)
    }

    const mesa = await MesaRepository.findOne({
      where: {
        mesa_id: pedido.mesa.mesa_id
      }
    })

    mesa.mesa_status = true
    mesa.mesa_fechamento = new Date()   

    return total
    
  }
}