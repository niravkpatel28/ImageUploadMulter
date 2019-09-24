const express = require('express');
const path = require('path');
const {globalError} = require('./utils/globalError');
const imageRouter = require('./route/imageRoute');
const {setImageDestination} = require('./utils/imageDestination');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

setImageDestination(path.join(__dirname,process.env.IMAGE_PATH));
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