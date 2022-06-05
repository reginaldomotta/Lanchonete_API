import { AppDataSource } from "../../../../data-source";
import { Mesa } from "../../entity/Mesa";

export const MesaRepository = AppDataSource.getRepository(Mesa)