import { AppDataSource } from "../../../../data-source";
import { Categoria } from "../../entity/Categoria";

export const CategoriaRepository = AppDataSource.getRepository(Categoria)