import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { productRoute } from './app/config/modules/product/product.route'
import Orderouter from './app/config/modules/order/order.route'

const app: Application = express()
const port = 3000

app.use(express.json())
app.use(cors())


// application route 

app.use('/api/products', productRoute)
app.use('/api/orders', Orderouter)

const getAController = (req: Request, res: Response) => {
    res.send('Hello World!')
}

app.get('/', getAController)

console.log(process.cwd())

export default app