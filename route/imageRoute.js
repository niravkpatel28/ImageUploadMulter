const express = require('express');
const {checkFolderName} = require('../utils/middlewares');
const router = express.Router();


router.route('/:folder')
.post(checkFolderName,(req,res)=>{
    res.status(200).json({
        status:"Image Uploaded Successfully"
    })
})


module.exports= router;