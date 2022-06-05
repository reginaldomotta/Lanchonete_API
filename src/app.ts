import express from "express"
import "reflect-metadata"
import { AppDataSource } from "./data-source";
import { error } from "./middlewares/error";
import { categoriaRoutes } from "./routes/categoria.routes";
import { mesaRoutes } from "./routes/mesa.routes";
import { pedidoRoutes } from "./routes/pedido.routes";
import { produtoRoutes } from "./routes/produto.routes";

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

const app = express();

app.use(express.json());

app.use("/categoria", categoriaRoutes);
app.use("/produto", produtoRoutes);
app.use("/mesa", mesaRoutes);
app.use("/pedido", pedidoRoutes);

app.use(error);

export {app};