import { Request, Response } from "express";
import { validation } from "./order.validation";
import { orderService } from "./order.service";
import { ProductService } from "../product/product.service";
import { ProductModel } from "../product/product.model";


const orderCreate = async (req: Request, res: Response) => {
    try {
        const newOrder = req.body.orders;

        const zodvalidate = validation.parse(newOrder);
        const result = await orderService.createOrderIntoDB(zodvalidate);
        res.status(200).json({
            success: true,
            message: "Order is created successfuly",
            data: result,
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "Order does not create",
            error: error,
        });
    }
};

const getAllOrder = async (req: Request, res: Response) => {
    try {
        const { email } = req.query

        const result = await orderService.getAllOrderFromDB(email as string);
        console.log(result)
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "Order not found",
            error: error,
        });
    }
};

export const orderController = {
    orderCreate,
    getAllOrder,
}


// const x = [{id: new ObjectId('6665e57ff1c1bda65adcbd92'),q:'b'}]
