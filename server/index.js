import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

// import route files

// -------------------------------

const app=express();
dotenv.config();

const port =process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>
    app.listen(port,(err)=>{
        console.log('server running at port ',port);
    }))
    .catch((error)=>{
        console.log(error);
    });
