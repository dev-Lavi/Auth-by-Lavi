import express from 'express' 
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
import { UserRouter } from './routes/user.js';

const app = express()
app.use(express.json())
app.use('/auth', UserRouter)

mongoose.connect('mongodb://localhost:27017//authentication')

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})