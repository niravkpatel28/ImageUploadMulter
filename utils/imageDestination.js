const fs = require('fs');
// check if the image destination folder exists 
// if it does not exist create a folder 
// path will be taken from config.env
exports.setImageDestination = (folderPath)=>{
    fs.exists(folderPath,(exists)=>{
        if(!exists){
            fs.mkdir(folderPath,(err)=>{
                return err;
            })
        }
        console.log('Image Destination folder created');
    })
}


