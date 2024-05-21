import express from 'express'
import { ProductController } from './product.controller'

const  router = express.Router()

// will call controller function

router.post('/create-products', ProductController.createProduct)

router.get('/', ProductController.getAllStudent)

router.get('/:productId', ProductController.getSingleStudent )

export const productRoute = router