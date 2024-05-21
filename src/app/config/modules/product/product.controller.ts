import { Request, Response } from "express";
import { ProductService } from "./product.service";


const createProduct = async (req: Request, res: Response) => {
    try {
        const { product : productData}= req.body.product

        // will call service func to send this data

        const result = await ProductService.createProductIntoDB(productData)

        // send response

        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    }catch (err){
        console.log(err)
    }

}

export const ProductController = {
    createProduct
}