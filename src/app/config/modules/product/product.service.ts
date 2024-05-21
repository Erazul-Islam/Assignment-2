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
    console.log(id)
    const result = await ProductModel.findOne({ id })
    return result
}


export const ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB
}