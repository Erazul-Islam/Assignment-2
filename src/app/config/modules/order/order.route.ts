import express from "express";
import { orderController } from "./order.controller";

const Orderouter = express.Router()
Orderouter.post('/', orderController.orderCreate)
Orderouter.get('/', orderController.getAllOrder)

export default Orderouter