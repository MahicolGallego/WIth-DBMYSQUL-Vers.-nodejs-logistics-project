import { deleteShipment, findAll, findById, save, updateShipment } from "../models/shipmentModel.js";


export const getAll = async (_, res) => {
    const shipments = await findAll();
    //console.log(shipments);
    res.status(200).json({ message: "ok", data: shipments })
}

export const getById = async (req, res) => {
    const {id} = req.params;
    const shipment = await findById(id);
    //console.log(shipment);
    res.json({ message: "Ok", data: shipment })
}

export const insert = async (req, res) => {
    const { item, quantity, vehicle_id, warehouse_id, driver_id } = req.body;
    //console.log(item, quantity, vehicle_id, warehouse_id, driver_id );
    const shipmentCreated = await save({item, quantity, vehicle_id, warehouse_id, driver_id });

    res.status(201).send({
        message: "Successfully created",
        data: shipmentCreated
    });
}

export const update = async (req, res) => {
    const {id} = req.params;
    const { item, quantity, vehicle_id, warehouse_id, driver_id } = req.body;
    const shipmentUpdated = await updateShipment(id, { item, quantity, vehicle_id, warehouse_id, driver_id });
    res.status(200).json({message: shipmentUpdated})
}

export const deletes = async (req, res) => {
        const {id} = req.params;
        const deleteRequest = await deleteShipment(id);
        res.status(200).json({ message: deleteRequest });
}