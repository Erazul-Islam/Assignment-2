import { z } from "zod";

const VariantSchema = z.object({
    type: z.string(),
    value: z.string()
});

const InventorySchema = z.object({
    quantity: z.number(),
    inStock: z.boolean()
});

const ProductSchema = z.object({
    // id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    variants: z.array(VariantSchema).optional(),
    inventory: InventorySchema.optional(),
    isDeleted: z.boolean().default(false)
});







export const validationProduct =  ProductSchema