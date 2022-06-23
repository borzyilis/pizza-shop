import dbConnect from "../../../util/mongo"
import Product from "../../../models/Product";
import useRouter from "next/router";

export default async function handler(req, res) {

    console.log(req)

    const { method, cookies } = req;

    const token = cookies.token

    await dbConnect()

    if (method === "GET") {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    if (method === "POST") {
        if (!token || token == !process.env.REACT_APP_TOKEN) {
            return res.status(401).json("Not authorized")
        }
        try {
            const product = await Product.create(req.body)
            res.status(201).json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}