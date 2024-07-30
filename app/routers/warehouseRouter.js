import { Router } from "express";
import { pool } from "../../config/db.js";
import { getAll, getSpecific, insert } from "../controllers/warehouseController.js";


export const warehouseRouter = Router();

warehouseRouter.get("/", getAll)
warehouseRouter.get("/:id", getSpecific)
warehouseRouter.post("/", insert);
warehouseRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, location } = req.body;
    try {
        const warehousesUpdated = await pool.query("UPDATE warehouses w SET name = ?, location = ? WHERE w.id = ?", [name, location, id]);
        // console.log(warehousesUpdated);
        res.status(201).json({ message: "Warehouse successfully updated" });
    } catch (err) {
        res.status(500).json({ error: err.sqlMessage, errorno: err.errno });
    } })

//Jerarquia de recursos

/***SIEMPRE PARA DEVOLVER RECURSOS LO HAGO BAJO LOS PLURALES DE ESTOS***/

/***CUANDO QUIERO DEVOLVER RELACIONES DE RECURSOS EL ESTANDAR ES
    la entidad fuerte(en plural)/:id de la entidad fuerte/relacion a traer(en plural)
    EXAMPLE:
    vehicles/:vehicleId/warehouses
***/


