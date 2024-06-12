"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: String,
    value: String
});
const inventorySchema = new mongoose_1.Schema({
    quantity: Number,
    inStock: Boolean
});
const ProductSchema = new mongoose_1.Schema({
    // id: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    tags: [String],
    variants: [variantSchema],
    inventory: inventorySchema,
    isDeleted: {
        type: Boolean,
        default: false
    }
});
exports.ProductModel = (0, mongoose_1.model)('product', ProductSchema);
// export const OrderModel = model<Order>('Order', orderSchema)
