
import { Mesa } from "../../entity/Mesa"
import { MesaRepository } from "../../repositories/implementations/Mesa.repository"

export class ListMesaUseCase {

  async execute(): Promise<Mesa[]>{

    var mesas = await MesaRepository.find()

    return mesas
    
  }
}