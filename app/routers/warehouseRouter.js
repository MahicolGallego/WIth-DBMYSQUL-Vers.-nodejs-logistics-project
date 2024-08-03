import { Router } from "express";
import { deletes, getAll, getById, insert, update } from "../controllers/warehouseController.js";


export const warehouseRouter = Router();

warehouseRouter.get("/", getAll);
warehouseRouter.get("/:id", getById);
warehouseRouter.post("/", insert);
warehouseRouter.put("/:id", update);
warehouseRouter.delete("/:id", deletes);


