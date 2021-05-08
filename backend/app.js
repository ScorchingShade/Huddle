import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'


//Initialise the app
const app= express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use(express.urlencoded({ extended: true }));


//Define port
const PORT = process.env.PORT || 5500

const uri = process.env.ATLAS_URI

//connect to mongodb
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDb connection established")
})


//Routes
app.use('/api/v1/users', userRouter)

//listen to port
app.listen(PORT, () => {
    console.log(`Served at http://localhost:${PORT}`);
});