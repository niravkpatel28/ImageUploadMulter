const express = require('express');
const multer = require('multer');
const {globalError} = require('./utils/globalError');
const imageRouter = require('./route/imageRoute');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const app = express();
app.use('/upload',imageRouter);
app.use('/',(req,res)=>{
    globalError(req,res,'Invalid Path')
})
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log('Error in starting server');
        return new Error(err);
    }
});