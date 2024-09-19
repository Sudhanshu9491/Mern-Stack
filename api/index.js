import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js'
// for hideing user pass mongodb
import dotenv from 'dotenv';
dotenv.config();

// mongodv connect 
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log(err);
})

// express
const  app=express();

// starting express
app.listen(3000,()=>{
    console.log("Server is running and this may take time ");
})

// api routes 
app.use("/api/user",userRouter);