import dbConnect from "../../../util/mongo"
import Order from "../../../models/Order";

export default async function handler(req, res) {
    const { method, query: { id } } = req;


    dbConnect()

    if (method === "GET") {
        try {
            const order = await Order.findById(id)
            res.status(200).json(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}