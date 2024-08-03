import { pool } from "../../config/db.js";

export async function findAll() {
    try {
        const [shipments] = await pool.query("SELECT * FROM shipments");
        return shipments;
    } catch (error) {
        throw new Error("Error in the request", error);
    }
}

export const findById = async (id) => {
    try {
        const [[shipmentFound]] = await pool.query("SELECT * FROM shipments WHERE id = ?", [id]);
        if (!shipmentFound) {
            throw new Error("Error in the request");
        }
        return shipmentFound;
    } catch (error) {
        throw new Error("shipment not found", error);
    }
}

export const save = async (shipment) => {
    try {
        const [resolve] = await pool.query("INSERT INTO shipments(item, quantity, vehicle_id, warehouse_id, driver_id) VALUES(?, ?, ?, ?, ?)", [shipment.item, shipment.quantity, shipment.vehicle_id, shipment.warehouse_id, shipment.driver_id])
        const [[shipmentCreated]] = await pool.query("SELECT * FROM shipments WHERE id = ?", [resolve.insertId])
        return shipmentCreated;
    } catch (error) {
        throw new Error("Error in the request", error);
    }
}

export const updateShipment = async (id, newShipment) => {
    try {
        await findById(id);
        await pool.query("UPDATE shipments SET item = ?, quantity = ?, vehicle_id = ?, warehouse_id = ?, driver_id = ? WHERE id = ?", [newShipment.item, newShipment.quantity, newShipment.vehicle_id, newShipment.warehouse_id, newShipment.driver_id, id]);
        return "Updated successfully";
    } catch (error) {
        throw new Error("Error in the request", error);
    }
}

export const deleteShipment = async (id) => {
    try {
       await pool.query("DELETE FROM shipments WHERE id = ?", [id]);
       return "Deleted successfully";
   } catch (error) {
       throw new Error("Error in the request", error);
   }
}