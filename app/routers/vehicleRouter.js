import { Router } from "express";
import { deletes, getAll, getById, insert, update } from "../controllers/vehicleController.js";

export const vehicleRouter = Router();

vehicleRouter.get("/", getAll);
vehicleRouter.get("/:id", getById);
vehicleRouter.post("/", insert);
vehicleRouter.put("/:id", update);
vehicleRouter.delete("/:id", deletes);