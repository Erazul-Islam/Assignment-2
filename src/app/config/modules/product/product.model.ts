import { Schema, model } from "mongoose"; 
import { Inventory, Product, Variant } from "./product.interface";


const variantSchema = new Schema<Variant>({
    type: String,
    value: String
})

const inventorySchema = new Schema<Inventory>({
    quantity: Number,
    inStock: Boolean
});

const ProductSchema = new Schema<Product>({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    tags: [String],
    variants: [variantSchema],
    inventory: inventorySchema
})


export const ProductModel = model<Product>('Product', ProductSchema)