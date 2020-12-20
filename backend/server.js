import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDb from './config/db.js';
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
dotenv.config();
connectDb();
app.get('/',(req,res)=>{
    res.send('API is running...')
})
app.use(express.json());
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes);

app.use(errorHandler)
app.use(notFound)


const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`server is running on ${process.env.NODE_ENV} in port ${PORT}`.yellow.bold));