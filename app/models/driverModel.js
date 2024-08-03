import { pool } from "../../config/db.js";

export async function findAll() {
    try {
        const [drivers] = await pool.query("SELECT * FROM drivers");
        return drivers;
    } catch (error) {
        throw new Error("Error in the request", error);
    }
}

export const findById = async (id) => {
    try {
        const [[driverFound]] = await pool.query("SELECT * FROM drivers WHERE id = ?", [id]);
        if (!driverFound) {
            throw new Error("Error in the request");
        }
        return driverFound;
    } catch (error) {
        throw new Error("driver not found", error);
    }
}

export const save = async (driver) => {
    try {
        const [resolve] = await pool.query("INSERT INTO drivers(name, warehouse_id) VALUES(?, ?)", [driver.name, driver.warehouse_id])
        const [[driverCreated]] = await pool.query("SELECT * FROM drivers WHERE id = ?", [resolve.insertId])
        return driverCreated;
    } catch (error) {
        throw new Error("Error in the request", error);
    }
}

export const updateDriver = async (id, newDriver) => {
    try {
        await findById(id);
        await pool.query("UPDATE drivers SET name = ?, warehouse_id = ? WHERE id = ?", [newDriver.name, newDriver.warehouse_id, id]);
        return "Updated successfully";
    } catch (error) {
        throw new Error("Error in the request", error);
    }
}

export const deleteDriver = async (id) => {
    try {
       await pool.query("DELETE FROM drivers WHERE id = ?", [id]);
       return "Deleted successfully";
   } catch (error) {
       throw new Error("Error in the request", error);
   }
}