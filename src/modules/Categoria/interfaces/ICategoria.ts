interface ICategoriaDTO {
  categoria_descricao: string
}

interface IEditCategoriaDTO {
  categoria_id: number
  categoria_descricao?: string
}

export { ICategoriaDTO, IEditCategoriaDTO }