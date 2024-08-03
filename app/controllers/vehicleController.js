import { deleteVehicle, findAll, findById, save, updateVehicle } from "../models/vehicleModel.js";

export const getAll = async (_, res) => {
    const vehicles = await findAll();
    //console.log(vehicles);
    res.status(200).json({ message: "ok", data: vehicles })
}

export const getById = async (req, res) => {
    const {id} = req.params;
    const vehicle = await findById(id);
    //console.log(vehicle);
    res.json({ message: "Ok", data: vehicle })
}

export const insert = async (req, res) => {
    const { model, year, driver_id } = req.body;
    //console.log(model, year, driver_id);
    const vehicleCreated = await save({model, year, driver_id});

    res.status(201).send({
        message: "Successfully created",
        data: vehicleCreated
    });
}

export const update = async (req, res) => {
    const {id} = req.params;
    const {model, year, driver_id} = req.body;
    const vehicleUpdated = await updateVehicle(id, {model, year, driver_id});
    res.status(200).json({message: vehicleUpdated})
}

export const deletes = async (req, res) => {
        const {id} = req.params;
        const deleteRequest = await deleteVehicle(id);
        res.status(200).json({ message: deleteRequest });
}