import { Router } from "express";
import { deletes, getAll, getById, insert, update } from "../controllers/shipmentController.js";

export const shipmentRouter = Router();

shipmentRouter.get("/", getAll);
shipmentRouter.get("/:id", getById);
shipmentRouter.post("/", insert);
shipmentRouter.put("/:id", update);
shipmentRouter.delete("/:id", deletes);