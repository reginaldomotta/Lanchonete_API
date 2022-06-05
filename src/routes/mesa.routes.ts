import { Router } from "express";
import { CreateMesaController } from "../modules/Mesa/useCases/createMesa/CreateMesaController";
import { DeletetMesaController } from "../modules/Mesa/useCases/deleteMesa/DeleteMesaController";
import { EditMesaController } from "../modules/Mesa/useCases/editMesa/EditMesaController";
import { ListMesaController } from "../modules/Mesa/useCases/listMesa/ListMesaController";

const mesaRoutes = Router();

const createMesaController = new CreateMesaController()
const listMesaController = new ListMesaController()
const editMesaController = new EditMesaController()
const deleteMesaController = new DeletetMesaController()

mesaRoutes.post("/", (request, response) =>
  createMesaController.handle(request, response)
);

mesaRoutes.get("/", (request, response) =>
listMesaController.handle(request, response)
);

mesaRoutes.put("/:mesa_id", (request, response) =>
editMesaController.handle(request, response)
);

mesaRoutes.delete("/:mesa_id", (request, response) =>
deleteMesaController.handle(request, response)
);


export { mesaRoutes };