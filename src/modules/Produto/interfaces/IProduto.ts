interface IProdutoDTO {
  produto_descricao: string
  produto_valor: number
  categoria_id: number
}

interface IEditProdutoDTO {
  produto_id: number
  produto_descricao?: string
  produto_valor?: number
  categoria_id?: number
}

export { IProdutoDTO, IEditProdutoDTO }