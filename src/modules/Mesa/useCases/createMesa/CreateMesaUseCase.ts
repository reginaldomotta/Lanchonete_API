import { Mesa } from "../../entity/Mesa"
import { ICreateMesaDTO } from "../../interfaces/IMesa"
import { MesaRepository } from "../../repositories/implementations/Mesa.repository"


export class CreateMesaUseCase {

  async execute({mesa_id}: ICreateMesaDTO): Promise<Mesa>{

    const mesa_abertura = new Date()
    const mesa_fechamento = new Date()
    const mesa_status = true

    const mesa = MesaRepository.create({
      mesa_id,
      mesa_abertura,
      mesa_fechamento,
      mesa_status
    })

    await MesaRepository.save(mesa)

    return mesa
    
  }
}