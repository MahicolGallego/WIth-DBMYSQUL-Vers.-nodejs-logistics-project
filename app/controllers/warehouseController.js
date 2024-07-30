import { findAll, save } from "../models/warehouseModel.js"
import { findById } from "../models/warehouseModel.js"

export const getAll = async (_, res) => {
    const warehouses = await findAll();
    // console.log(warehouses);
    res.status(200).json({ message: "ok", data: warehouses })
}

export const getSpecific = async (req, res) => {
    const {id} = req.params;
    const warehouse = await findById(id);
    console.log(warehouse);
    res.json({ message: "Ok", data: warehouse })
}

export const insert = async (req, res) => {
    const { name, location } = req.body;
    console.log(name, location);
    const warehouseCreated = await save({name, location});

    res.status(201).send({
        message: "Successfully created",
        data: warehouseCreated
    });
}

export const update = async (req, res) => {
    //
}

export const deletes = async (req, res) => {
    //
}






