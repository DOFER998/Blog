const ErrorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500; // if no status code is provided, default to 500 (internal server error)
  const message = err.message || "Something went wrong";
  res.status(status).json({
    success: false,
    status,
    message,
    stack: process.env.NODE_ENV !== "development" ? {} : err.stack,
  })
}

export default ErrorHandler;
