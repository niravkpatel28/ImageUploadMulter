//configure multer is a middleware that will configure an upload function 
// and add a destination folder and filename 
// attaches an upload object in the req 

const multer = require('multer');
exports.configureMulter = (req,res,next)=>{
    const multerStorage = multer.diskStorage({
        destination: (req,file,cb)=>{
            // console.log(req.params.folder);
            cb(null,req.destination);
        },
        filename:(req,file,cb)=>{
            cb(null,'image-'+Date.now()+'.jpg');
        }
    })

    const upload= multer({storage:multerStorage});  
    //return upload;
    req.upload = multer({storage:multerStorage});  
    next();
}