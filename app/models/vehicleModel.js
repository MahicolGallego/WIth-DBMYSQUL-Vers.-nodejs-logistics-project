import { pool } from "../../config/db.js";

export async function findAll() {
    try {
        const [vehicles] = await pool.query("SELECT * FROM vehicles");
        return vehicles;
    } catch (error) {
        throw new Error("Error in the request", error);
    }
}

export const findById = async (id) => {
    try {
        const [[vehicleFound]] = await pool.query("SELECT * FROM vehicles WHERE id = ?", [id]);
        if (!vehicleFound) {
            throw new Error("Error in the request");
        }
        return vehicleFound;
    } catch (error) {
        throw new Error("vehicle not found", error);
    }
}

export const save = async (vehicle) => {
    try {
        const [resolve] = await pool.query("INSERT INTO vehicles(model, year, driver_id) VALUES(?, ?, ?)", [vehicle.model, vehicle.year, vehicle.driver_id])
        const [[vehicleCreated]] = await pool.query("SELECT * FROM vehicles WHERE id = ?", [resolve.insertId])
        return vehicleCreated;
    } catch (error) {
        throw new Error("Error in the request", error);
    }
}

export const updateVehicle = async (id, newVehicle) => {
    try {
        await findById(id);
        await pool.query("UPDATE vehicles SET model = ?, year = ?, driver_id = ? WHERE id = ?", [newVehicle.model, newVehicle.year, newVehicle.driver_id, id]);
        return "Updated successfully";
    } catch (error) {
        throw new Error("Error in the request", error);
    }
}

export const deleteVehicle = async (id) => {
    try {
       await pool.query("DELETE FROM vehicles WHERE id = ?", [id]);
       return "Deleted successfully";
   } catch (error) {
       throw new Error("Error in the request", error);
   }
}