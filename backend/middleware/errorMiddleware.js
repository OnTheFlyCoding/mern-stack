const errorHandler = (err,req,res,next)=>{
    //sends you the status from res.status (goalController.js)
    //if a res.status has been given, use that. Otherwqise theres a server Error
    const statusCode = res.statusCode? res.statusCode:500
    res.status(statusCode)

    res.json({
        message: err.message,
        stack : process.env.NODE_ENV === 'production'? null:err.stack
    })
}

module.exports = {
    errorHandler,
}