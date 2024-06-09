import { Request, Response } from "express";
import { validation } from "./order.validation";
import { orderService } from "./order.service";


const orderCreate = async (req: Request, res: Response) => {
    try {
        const newOrder = req.body.orders;
        // const zodvalidate = validation.parse(newOrder);
        const result = await orderService.createOrderIntoDB(newOrder);
        res.status(200).json({
            success: true,
            message: "Order is created successfuly",
            data: result,
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "order did not created to mongodb",
            error: error,
        });
    }
};

const getAllOrder = async (req: Request, res: Response) => {
    try {
        const { email } = req.query
        const result = await orderService.getAllOrderFromDB(email as string);
        res.status(200).json({
            success: true,
            message: "all order found from  mongodb",
            data: result,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "no order found from mongodb",
            error: error,
        });
    }
};

export const orderController = {
    orderCreate,
    getAllOrder
}