import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
    port: process.env.PORT,
    DTABASE_URL: process.env.DTABASE_URL
}