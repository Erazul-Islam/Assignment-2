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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body.product;
        const validation = product_validation_1.validationProduct.parse(product);
        console.log(validation);
        // will call service func to send this data
        const result = yield product_service_1.ProductService.createProductIntoDB(validation);
        // send response
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "something went wrong",
            err,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        console.log(productId);
        const result = yield product_service_1.ProductService.getSingleProductsFromDB(productId);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getUpdatedProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const updatedData = req.body;
    try {
        const updatedProduct = yield product_service_1.ProductService.getUpdatedProductFromDB(productId, updatedData);
        console.log(updatedProduct);
        if (!updatedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }
        // res.status(200).send(updatedData)
        res.status(200).json({
            success: true,
            message: "Products updated successfully!",
            data: updatedProduct
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        console.log(productId);
        const result = yield product_service_1.ProductService.deletedFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Products deleted successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
// Promise<void>
const searchProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    console.log(searchTerm);
    if (searchTerm) {
        try {
            const result = yield product_service_1.ProductService.searchProduct(searchTerm);
            res.status(200).json({
                success: true,
                message: 'Search product',
                data: result
            });
        }
        catch (err) {
            res.status(500).json({
                success: false,
                message: " search something went wrong",
                error: err,
            });
        }
    }
    else {
        getAllProduct(req, res);
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products are retrieved successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    getUpdatedProduct,
    deleteSingleProduct,
    searchProductsController
};
// export const orderController = {
//     createOrder,
//     getOrders
// }
