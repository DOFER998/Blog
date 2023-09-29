const ErrorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    status,
    message: err.message || "Internal Server Error",
  })
}

export default ErrorHandler;
