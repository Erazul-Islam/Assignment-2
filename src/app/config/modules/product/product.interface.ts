export type Variant = {
    type: String;
    value: String
}

export type Inventory = {
    quantity: Number;
    inStock: Boolean;
}
export type Product = {
    name: String,
    description: String,
    price: Number,
    category: String,
    tags: String[],
    variants: Variant[]
    inventory: Inventory,
    isDeleted: Boolean
}