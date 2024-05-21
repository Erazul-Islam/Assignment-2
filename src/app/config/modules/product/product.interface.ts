export type Product = {
    name: String,
    description: String,
    price: Number,
    category: String,
    tags: String,
    variants: [
        {
            type: String,
            value: String
        },
        {
            type: String,
            value: String
        }
    ],
    inventory: {
        quantity: String,
        inStock: Boolean
    }
}