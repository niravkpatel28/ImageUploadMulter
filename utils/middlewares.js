const {globalError}=require('./globalError');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
dotenv.config({path:'./config.env'});

const imagePath = process.env.IMAGE_PATH

exports.checkFolderName = (req,res,next)=>{
    if(req.params.folder){
        //check if the folder is present in image directory
        fs.exists(path.join(__dirname,'..',imagePath,req.params.folder),(exists)=>{
            if(!exists){
                fs.mkdir(path.join(__dirname,'..',imagePath,req.params.folder),(err)=>{
                    if(err){
                        return globalError(req,res,err)
                    }
                    // console.log('Folder created');
                    
                })
            }
            //at this point folder is created 
            // attach the destination folder to request or res.locals 
            req.destination= path.join(__dirname,'..',imagePath,req.params.folder);
            next();
        })
        
    }else{
        globalError(req,res,new Error('Folder name is not specified'));
    }   
}

exports.uploadImage = (req,res,next)=>{
    // console.log(req.destination);
    // console.log(req.upload);
    const upload =req.upload.single('photo');
    upload(req,res,function(err){
        if(err){
            console.log('Unknown error occured while uploading image ');
            return globalError(req,res,err);
        }
        // console.log('Image uploaded');
        res.status(200).json({
            status:"Image Uploaded Succecssfully",
            file :req.file
        })
        })
}