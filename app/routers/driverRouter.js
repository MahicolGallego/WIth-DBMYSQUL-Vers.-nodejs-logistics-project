import { Router } from "express";
import { deletes, getAll, getById, insert, update } from "../controllers/driverController.js";

export const driverRouter = Router();

driverRouter.get("/", getAll);
driverRouter.get("/:id", getById);
driverRouter.post("/", insert);
driverRouter.put("/:id", update);
driverRouter.delete("/:id", deletes);