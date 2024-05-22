import { Product } from "./product.interface";
import { ProductModel } from "./product.model";


const createProductIntoDB = async (product: Product) => {

    const result = await ProductModel.create(product)
    return result
}

const getAllProductsFromDB = async () => {
    const result = await ProductModel.find()
    return result
}

const getSingleProductsFromDB = async (id: string) => {
    const result = await ProductModel.findOne({ _id: id })
    console.log(result)
    return result
}

const getUpdatedProductFromDB = async (id: string, updatedData: Product) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, updatedData, { new: true })
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}


export const ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    getUpdatedProductFromDB
}