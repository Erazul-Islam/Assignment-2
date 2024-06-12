"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String },
    productId: { type: String },
    price: { type: Number },
    quantity: { type: Number }
});
exports.orderModel = (0, mongoose_1.model)("orders", orderSchema);
