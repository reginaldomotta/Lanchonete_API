import { Router } from "express";
import { CreateProdutoController } from "../modules/Produto/useCases/createProduto/CreateProdutoController";
import { DeletetProdutoController } from "../modules/Produto/useCases/deleteProduto/DeleteProdutoController";
import { EditProdutoController } from "../modules/Produto/useCases/editProduto/EditProdutoController";
import { ListProdutoController } from "../modules/Produto/useCases/listProduto/ListProdutoController";

const produtoRoutes = Router();

const createProdutoController = new CreateProdutoController()
const listProdutoController = new ListProdutoController()
const editProdutoController = new EditProdutoController()
const deleteProdutoController = new DeletetProdutoController()

produtoRoutes.post("/", (request, response) =>
  createProdutoController.handle(request, response)
);

produtoRoutes.get("/", (request, response) =>
listProdutoController.handle(request, response)
);

produtoRoutes.put("/:produto_id", (request, response) =>
editProdutoController.handle(request, response)
);

produtoRoutes.delete("/:produto_id", (request, response) =>
deleteProdutoController.handle(request, response)
);


export { produtoRoutes };