
import { AppDataSource } from "../../../data-source"
import { Produto } from "../entity/Produto"

export const ProdutoRepository = AppDataSource.getRepository(Produto)