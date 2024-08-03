import express from "express";
import { warehouseRouter } from "../routers/warehouseRouter.js";
import { shipmentRouter } from "../routers/shipmentRouter.js";
import { vehicleRouter } from "../routers/vehicleRouter.js";
import { driverRouter } from "../routers/driverRouter.js";

export const routes = express();

routes.use("/warehouses", warehouseRouter)
routes.use("/shipments", shipmentRouter)
routes.use("/vehicles", vehicleRouter)
routes.use("/drivers", driverRouter)
 