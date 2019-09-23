const {globalError}=require('./globalError');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
dotenv.config({path:'./config.env'});

const imagePath = process.env.IMAGE_PATH

exports.checkFolderName = (req,res,next)=>{
    console.log(path.join(__dirname,'..',imagePath,req.params.folder));
    
    if(req.params.folder){
        //check if the folder is present in image directory
        fs.exists(path.join(__dirname,'..',imagePath,req.params.folder),(exists)=>{
            if(!exists){
                fs.mkdir(path.join(__dirname,'..',imagePath,req.params.folder),(err)=>{
                    if(err){
                        return globalError(req,res,err)
                    }
                    console.log('Folder created');
                    
                })
            }
            next();
        })
        
    }else{
        globalError(req,res,new Error('Folder name is not specified'));
    }   
}

