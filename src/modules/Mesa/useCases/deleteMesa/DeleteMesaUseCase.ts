import { AppError } from "../../../../error/AppError"
import { MesaRepository } from "../../repositories/implementations/Mesa.repository"

export class DeleteMesaUseCase {

  async execute(mesa_id : number): Promise<void>{

    const mesa = await MesaRepository.findOneBy({mesa_id})

    if(!mesa){
      throw new AppError("Mesa não existe na base de dados", 404)
    }

    await MesaRepository.delete({mesa_id})
    
  }
}