import express from "express";
import { warehouseRouter } from "../routers/warehouseRouter.js";

export const routes = express();

routes.use("/warehouses", warehouseRouter)
// routes.use("/shipments", shipmentRouter)
// routes.use("/vehicles", vehicleRouter)
// routes.use("/drivers", driverRouter)
 