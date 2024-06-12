"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationProduct = void 0;
const zod_1 = require("zod");
const VariantSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string()
});
const InventorySchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean()
});
const ProductSchema = zod_1.z.object({
    // id: z.string().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number(),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    variants: zod_1.z.array(VariantSchema).optional(),
    inventory: InventorySchema.optional(),
    isDeleted: zod_1.z.boolean().default(false)
});
exports.validationProduct = ProductSchema;
