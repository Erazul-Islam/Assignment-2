import { Torder } from "./order.interface";
import { orderModel } from "./order.model";


const createOrderIntoDB = async (payload: Torder) => {
    const result = await orderModel.create(payload);
    return result
}

const getAllOrderFromDB = async (email: string) => {
    const query = email ? { email } : {}
    const result = await orderModel.find(query)
    return result
}

export const orderService = {
    createOrderIntoDB,
    getAllOrderFromDB
}