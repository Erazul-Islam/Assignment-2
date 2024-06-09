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

const getUpdatedProductFromDB = async (id: string, payload: Partial<Product>) => {
    try {
        const updatedProduct = await ProductModel.findOneAndUpdate({ _id: id }, payload, { new: true })
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const deletedFromDB = async (id: string) => {
    const result = await ProductModel.deleteOne({ _id: id }, { isDeleted: true })
    console.log(result)
    return result
}


const searchProduct = async (searchTerm: string) => {
    const searchAbleFields = ["name", "tags", "category"];
    let query = {};
    if (searchTerm) {
        query = {
            $or:
                searchAbleFields.map((field) => ({ [field]: { $regex: searchTerm, $options: "i" } }))

        };
        console.log(query)
    }

    const result = await ProductModel.find(query);
    return result;
};


export const ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    getUpdatedProductFromDB,
    deletedFromDB,
    searchProduct,
}

// export const OrderService = {
//     createOrder,
//     getOrders
// }