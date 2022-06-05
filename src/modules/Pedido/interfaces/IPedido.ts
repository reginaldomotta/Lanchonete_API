interface IPedidoDTO {
  mesa_id: number
}

interface IAcresProdutoPedidoDTO {
  pedido_id: number
  pedido_quantidade: string
  produto_id: number
}

export { IPedidoDTO, IAcresProdutoPedidoDTO}