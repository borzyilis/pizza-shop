import dbConnect from "../../../util/mongo"
import Product from "../../../models/Product";

export default async function handler(req, res) {

    const { method, query: { id } } = req;

    dbConnect()

    if (method === "GET") {
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    if (method === "PUT") {
        try {
          const product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          console.error(product)
          res.status(200).json(product);
        } catch (err) {
            console.error(err)
          res.status(500).json(err);
        }
      }


    if (method === "DELETE") {
        try {
            await Product.findByIdAndRemove(id)
            res.status(200).json();
        } catch (e) {
            res.status(500).json(e)
        }
    }


}



