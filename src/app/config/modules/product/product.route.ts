import express from 'express'
import { ProductController } from './product.controller'

const  router = express.Router()

// will call controller function

router.post('/create-products', ProductController.createProduct)

export const productRoute = router