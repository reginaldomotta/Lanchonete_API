
import { AppDataSource } from "../../../data-source"
import { Pedido } from "../entity/Pedido"

export const PedidoRepository = AppDataSource.getRepository(Pedido)