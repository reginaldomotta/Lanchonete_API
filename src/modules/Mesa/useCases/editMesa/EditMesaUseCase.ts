import { AppError } from "../../../../error/AppError"
import { Mesa } from "../../entity/Mesa"
import { IEditMesaDTO } from "../../interfaces/IMesa"
import { MesaRepository } from "../../repositories/implementations/Mesa.repository"

export class EditMesaUseCase {

  async execute({ mesa_id, mesa_abertura, mesa_fechamento, mesa_status }: IEditMesaDTO): Promise<Mesa>{

    const mesa = await MesaRepository.findOneBy({ mesa_id })

    if(!mesa){
      throw new AppError("Mesa não existe na base de dados", 404)
    }

    mesa.mesa_abertura = mesa_abertura
    mesa.mesa_fechamento = mesa_fechamento
    mesa.mesa_status = mesa_status

    await MesaRepository.save(mesa)

    return mesa
    
  }
}