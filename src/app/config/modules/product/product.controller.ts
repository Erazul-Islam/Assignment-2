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

        const productId = req.params.productId;
        console.log(productId)

        const result = await ProductService.getSingleProductsFromDB(productId)
        console.log(result)
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}


const getUpdatedProduct = async (req : Request,res : Response) => {
    const productId = req.params.productId
    const updatedData = req.body

    try {
        const updatedProduct = await ProductService.getUpdatedProductFromDB(productId,updatedData)
        console.log(updatedProduct)
        if(!updatedProduct){
            return res.status(404).send({message : 'Product not found'})
        }
        // res.status(200).send(updatedData)
        res.status(200).json({
            success: true,
            message: "Products updated successfully!",
            data: updatedProduct
        })
    }catch(err){
        console.log(err)
    }
}

export const ProductController = {
    createProduct,
    getAllStudent,
    getSingleStudent,
    getUpdatedProduct
}