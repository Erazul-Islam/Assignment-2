import { Schema, model } from "mongoose";
import { Torder } from "./order.interface";

const orderSchema = new Schema<Torder>({
    email: { type: String },
    productId: { type: String },
    price: { type: Number },
    quantity: { type: Number }
})

export const orderModel = model<Torder>("orders", orderSchema)