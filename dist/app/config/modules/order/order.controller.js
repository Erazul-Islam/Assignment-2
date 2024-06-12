"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_validation_1 = require("./order.validation");
const order_service_1 = require("./order.service");
const orderCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = req.body.orders;
        // const quantity = newOrder.quantity
        // console.log(quantity)
        // const product = await ProductService.getAllProductsFromDB()
        // const z = product[0]._id
        // const string = z.toString()
        // const singleproduct = ProductService.getSingleProductsFromDB(string)
        // console.log(singleproduct)
        // // if (string === newOrder.productId) {
        // //     return singleproduct
        // // }
        const zodvalidate = order_validation_1.validation.parse(newOrder);
        const result = yield order_service_1.orderService.createOrderIntoDB(zodvalidate);
        res.status(200).json({
            success: true,
            message: "Order is created successfuly",
            data: result,
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            message: "Order does not create",
            error: error,
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const result = yield order_service_1.orderService.getAllOrderFromDB(email);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            message: "Order not found",
            error: error,
        });
    }
});
exports.orderController = {
    orderCreate,
    getAllOrder,
};
// const x = [{id: new ObjectId('6665e57ff1c1bda65adcbd92'),q:'b'}]
