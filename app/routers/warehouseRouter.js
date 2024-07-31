import { Router } from "express";
import { deletes, getAll, getSpecific, insert, update } from "../controllers/warehouseController.js";


export const warehouseRouter = Router();

warehouseRouter.get("/", getAll);
warehouseRouter.get("/:id", getSpecific);
warehouseRouter.post("/", insert);
warehouseRouter.put("/:id", update);
warehouseRouter.delete("/:id", deletes);


