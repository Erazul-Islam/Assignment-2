import { Request, Response } from "express";
import { ProductService } from "./product.service";


const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body.product

        // will call service func to send this data

        const result = await ProductService.createProductIntoDB(product)

        // send response

        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

const getAllStudent = async (req: Request, res: Response) => {

    try {
        const result = await ProductService.getAllProductsFromDB()
        res.status(200).json({
            success: true,
            message: "Products are retrieved successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

const getSingleStudent = async (req: Request, res: Response) => {

    try {

        const { productId } = req.params;

        const result = await ProductService.getSingleProductsFromDB(productId)
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

export const ProductController = {
    createProduct,
    getAllStudent,
    getSingleStudent
}