const express = require('express');
const {checkFolderName, uploadImage} = require('../utils/middlewares');
const {configureMulter} = require('../multerConfiguration/configureMulter');
const {globalError} = require('../utils/globalError');
const router = express.Router();


router.route('/:folder')
.post(checkFolderName,configureMulter,uploadImage);


// functional code 

// router.route('/:folder')
// .post(checkFolderName,configureMulter,(req,res)=>{
//     console.log(req.destination);
//     console.log(req.upload);
//     const upload =req.upload.single('photo');
//     upload(req,res,function(err){
//         if(err){
//             console.log('Unknown error occured while uploading image ');
//             return globalError(req,res,err);
//         }
//         console.log('Image uploaded');
//         res.status(200).json({
//             status:"Image Uploaded Succecssfully",
//             file :req.file
//         })
//         })
// })



module.exports= router;