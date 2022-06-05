import { Router } from "express";
import { CreateCategoriaController } from "../modules/Categoria/useCases/createCategoria/CreateCategoriaController";
import { DeletetCategoriaController } from "../modules/Categoria/useCases/deleteCategoria/DeleteCategoriaController";
import { EditCategoriaController } from "../modules/Categoria/useCases/editCategoria/EditCategoriaController";
import { ListCategoriaController } from "../modules/Categoria/useCases/listCategoria/ListCategoriaController";

const categoriaRoutes = Router();

const createCategoriaController = new CreateCategoriaController()
const listCategoriaController = new ListCategoriaController()
const editCategoriaController = new EditCategoriaController()
const deleteCategoriaController = new DeletetCategoriaController()

categoriaRoutes.post("/", (request, response) =>
  createCategoriaController.handle(request, response)
);

categoriaRoutes.get("/", (request, response) =>
listCategoriaController.handle(request, response)
);

categoriaRoutes.put("/:categoria_id", (request, response) =>
editCategoriaController.handle(request, response)
);

categoriaRoutes.delete("/:categoria_id", (request, response) =>
deleteCategoriaController.handle(request, response)
);


export { categoriaRoutes };