import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { productRoute } from './app/config/modules/product/product.route'

const app: Application = express()
const port = 3000

app.use(express.json())
app.use(cors())


// application route 

app.use('/api/v1/products', productRoute )

const getAController = (req: Request, res: Response) => {
    res.send('Hello World!')
}

app.get('/', getAController)

console.log(process.cwd())

export default app