import { Request, Response, query } from "express";
import { ProductService } from "./product.service";
import { validationProduct } from "./product.validation";


const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body.product
        const validation = validationProduct.parse(product)
        console.log(validation)

        // will call service func to send this data

        const result = await ProductService.createProductIntoDB(validation)

        // send response

        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: "something went wrong",
            err,
        });
    }

}


const getSingleProduct = async (req: Request, res: Response) => {

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


const getUpdatedProduct = async (req: Request, res: Response) => {
    const productId = req.params.productId
    const updatedData = req.body

    try {
        const updatedProduct = await ProductService.getUpdatedProductFromDB(productId, updatedData)
        console.log(updatedProduct)
        if (!updatedProduct) {
            return res.status(404).send({ message: 'Product not found' })
        }
        // res.status(200).send(updatedData)
        res.status(200).json({
            success: true,
            message: "Products updated successfully!",
            data: updatedProduct
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteSingleProduct = async (req: Request, res: Response) => {

    try {

        const productId = req.params.productId;
        console.log(productId)

        const result = await ProductService.deletedFromDB(productId)
        res.status(200).json({
            success: true,
            message: "Products deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

// Promise<void>

const searchProductsController = async (req: Request, res: Response) => {
    const { searchTerm } = req.query
    console.log(searchTerm)
    if (searchTerm) {
        try {
            const result = await ProductService.searchProduct(searchTerm as string)
            res.status(200).json({
                success: true,
                message: 'Search product',
                data: result
            })
        }
        catch (err) {
            res.status(500).json({
                success: false,
                message: " search something went wrong",
                error: err,
            });
        }
    } else {
        getAllProduct(req, res)
    }
}


const getAllProduct = async (req: Request, res: Response) => {

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

export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    getUpdatedProduct,
    deleteSingleProduct,
    searchProductsController
}

// export const orderController = {
//     createOrder,
//     getOrders
// }