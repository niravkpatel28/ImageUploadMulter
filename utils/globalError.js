exports.globalError=(req,res,err)=>{
    res.json({
        status: "Error",
        err
    })
}