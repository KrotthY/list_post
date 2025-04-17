export const ErrorHandler = (err,req,res,next) => {
  const errStatus = err.status || 500 
  const errMessage = err.message || 'Internal server error'
  res.status(errStatus).json({success:false,status:errStatus ,message:errMessage})
}
