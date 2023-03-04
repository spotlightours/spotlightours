import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import tourRoutes from './routes/tours.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// database connection
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error');
    }
};

//for testing
{/*app.get('/', (req, res) => {
    res.send('Hello World!');
});*/}


// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours', tourRoutes);



app.listen(port, () => {
    connect();
    console.log(`Server is running on port ${port}`);
});