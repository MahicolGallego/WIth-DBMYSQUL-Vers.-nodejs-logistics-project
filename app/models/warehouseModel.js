import { pool } from "../../config/db.js";

export async function findAll() {
    try {
        const [warehouses] = await pool.query("SELECT * FROM warehouses");
        return warehouses;
    } catch (error) {
        throw new Error("Error en la peticion", error);
    }
}

export const findById = async (id) => {
    try {
        const [[warehouseFound]] = await pool.query("SELECT * FROM warehouses WHERE id = ?", [id]);
        if (!warehouseFound) {
            throw new Error("Error en la peticion");
        }
        return warehouseFound;
    } catch (error) {
        throw new Error("Warehouse not found", error);
    }
}

export const save = async (warehouse) => {
    try {
        const [resolve] = await pool.query("INSERT INTO warehouses(name, location) VALUES(?, ?)", [warehouse.name, warehouse.location])
        const [[warehouseCreated]] = await pool.query("SELECT * FROM warehouses WHERE id = ?", [resolve.insertId])
        return warehouseCreated;
    } catch (error) {
        throw new Error("Error en la peticion", error);
    }
}

export const updateWarehouse = async (id, newWarehouse) => {
    try {
        await findById(id);
        await pool.query("UPDATE warehouses SET name = ?, location = ? WHERE id = ?", [newWarehouse.name, newWarehouse.location, id]);
        //console.log(warehouseUpdate);
        return "Updated successfully";
    } catch (error) {
        throw new Error("Error en la peticion", error);
    }
}

export const deleteWarehouse = async (id) => {
    try {
       await pool.query("DELETE FROM warehouses WHERE id = ?", [id]);
       return "Deleted successfully";
   } catch (error) {
       throw new Error("Error en la peticion", error);
   }
}