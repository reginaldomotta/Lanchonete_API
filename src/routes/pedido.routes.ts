import { Router } from "express";
import { CreatePedidoController } from "../modules/Pedido/useCases/createPedido/CreatePedidoController";
import { EditPedidoController } from "../modules/Pedido/useCases/editPedido/EditPedidoController";
import { FinalizaPedidoController } from "../modules/Pedido/useCases/FinalizaPedido/FinalizaPedidoController";
import { ListPedidoController } from "../modules/Pedido/useCases/listPedido/ListPedidoController";

const pedidoRoutes = Router();

const createPedidoController = new CreatePedidoController()
const listPedidoController = new ListPedidoController()
const editPedidoController = new EditPedidoController()
const finalizaPedidoController = new FinalizaPedidoController()

pedidoRoutes.post("/", (request, response) =>
  createPedidoController.handle(request, response)
);

pedidoRoutes.get("/", (request, response) =>
listPedidoController.handle(request, response)
);

pedidoRoutes.put("/:pedido_id", (request, response) =>
editPedidoController.handle(request, response)
);

pedidoRoutes.get("/:pedido_id", (request, response) =>
finalizaPedidoController.handle(request, response)
);


export { pedidoRoutes };