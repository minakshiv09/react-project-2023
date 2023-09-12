import express from 'express';
import { configureDb } from './src/configs/DbConfig.js';
import chartRouter from './src/routers/ChartRouter.js';
import cors from 'cors'


const app = express()
app.use(cors())
configureDb()
//app.use(express.json())
app.use(chartRouter)

app.listen(process.env.SERVER_PORT,() =>{
    console.log(`Server is listening on port 6065`)
})