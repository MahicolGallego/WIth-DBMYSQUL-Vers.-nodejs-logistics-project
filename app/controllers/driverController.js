import { deleteDriver, findAll, findById, save, updateDriver} from "../models/driverModel.js";

export const getAll = async (_, res) => {
    const drivers = await findAll();
    //console.log(drivers);
    res.status(200).json({ message: "ok", data: drivers })
}

export const getById = async (req, res) => {
    const {id} = req.params;
    const driver = await findById(id);
    //console.log(driver);
    res.json({ message: "Ok", data: driver })
}

export const insert = async (req, res) => {
    const { name, warehouse_id } = req.body;
    //console.log(name, warehouse_id);
    const driverCreated = await save({name, warehouse_id});

    res.status(201).send({
        message: "Successfully created",
        data: driverCreated
    });
}

export const update = async (req, res) => {
    const {id} = req.params;
    const {name, warehouse_id} = req.body;
    const driverUpdated = await updateDriver(id, {name, warehouse_id});
    res.status(200).json({message: driverUpdated})
}

export const deletes = async (req, res) => {
        const {id} = req.params;
        const deleteRequest = await deleteDriver(id);
        res.status(200).json({ message: deleteRequest });
}