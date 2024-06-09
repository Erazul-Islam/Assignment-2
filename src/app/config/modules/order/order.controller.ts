import { Request, Response } from "express";
import { validation } from "./order.validation";
import { orderService } from "./order.service";


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

const searchProductsController = async (req: Request, res: Response) => {
    const { searchTerm } = req.query
    console.log(searchTerm)
    if (searchTerm) {
        try {
            const result = await orderService.retriveOrders(searchTerm as string)
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
        getAllOrder(req, res)
    }
}

const getAllOrder = async (req: Request, res: Response) => {
    try {
        const { email } = req.query
        const result = await orderService.getAllOrderFromDB(email as string);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "Order does not fetched successfully",
            error: error,
        });
    }
};

export const orderController = {
    orderCreate,
    getAllOrder,
    searchProductsController
}