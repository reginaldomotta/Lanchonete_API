import { DataSource } from "typeorm"
import { Categoria } from "./modules/Categoria/entity/Categoria"
import { Mesa } from "./modules/Mesa/entity/Mesa"
import { Pedido } from "./modules/Pedido/entity/Pedido"
import { Produto } from "./modules/Produto/entity/Produto"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "lanchonete",
    entities: [Categoria, Produto, Mesa, Pedido],
    synchronize: true,
    migrations: ["src/migration/*.ts"],  
})