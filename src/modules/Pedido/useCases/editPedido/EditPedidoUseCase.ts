import { IsNull } from "typeorm"
import { AppError } from "../../../../error/AppError"
import { ProdutoRepository } from "../../../Produto/repositories/Produto.repository"
import { Pedido } from "../../entity/Pedido"
import { IAcresProdutoPedidoDTO } from "../../interfaces/IPedido"
import { PedidoRepository } from "../../repositories/Pedido.repository"

export class EditPedidoUseCase {

  async execute({ pedido_id, pedido_quantidade, produto_id }: IAcresProdutoPedidoDTO): Promise<Pedido>{

    const pedido = await PedidoRepository.findOne({
      where: {
        pedido_id: pedido_id
      },
      relations: {
        produtos: true
      }
    })

    if(!pedido){
      throw new AppError("Pedido não existe na base de dados", 404)
    }

    const produto = await ProdutoRepository.findOneBy({ produto_id })

    if(!produto){
      throw new AppError("Produto não existe na base de dados", 404)
    }

    if(pedido.produtos == []){
      pedido.produtos = [produto]
    }else{
      pedido.produtos.push(produto)
    }    

    if (pedido.pedido_quantidade == ""){
      pedido.pedido_quantidade = pedido_quantidade
    }else{
      pedido.pedido_quantidade = pedido.pedido_quantidade + " " + pedido_quantidade
    }

    await PedidoRepository.save(pedido)

    return pedido
    
  }
}