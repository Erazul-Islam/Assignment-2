import express from 'express'
import { ProductController} from './product.controller'

const router = express.Router()

// will call controller function

router.post('/', ProductController.createProduct)

// router.get('/', ProductController.getAllProduct)

router.get('/:productId', ProductController.getSingleProduct)

router.put('/:productId', ProductController.getUpdatedProduct)

router.delete('/:productId', ProductController.deleteSingleProduct)

router.get('/', ProductController.searchProductsController)

export const productRoute = router