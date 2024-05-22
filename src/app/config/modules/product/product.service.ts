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

const deletedFromDB = async (id: string) => {
    const result = await ProductModel.updateOne({ _id: id }, { isDeleted: true })
    console.log(result)
    return result
}

const searchProducts = async (query: string) => {
    try {
        const products = await ProductModel.find({
            $or: [
                [
                    { name: { $regex: query, $options: 'i' } },
                    { category: { $regex: query, $options: 'i' } },
                    { description: { $regex: query, $options: 'i' } }
                ]
            ]
        }).exec()
        return products
    } catch (error) {
        console.log(error);
    }
}


export const ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    getUpdatedProductFromDB,
    deletedFromDB,
    searchProducts
}