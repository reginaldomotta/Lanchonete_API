interface ICreateMesaDTO {
  mesa_id: number
}

interface IEditMesaDTO {
  mesa_id: number
  mesa_abertura?: Date
  mesa_fechamento?: Date
  mesa_status?: boolean
}

export { ICreateMesaDTO, IEditMesaDTO }