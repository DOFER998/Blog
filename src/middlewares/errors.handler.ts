import { Request, Response, NextFunction } from 'express';

const ErrorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  res.status(status).json({
    status,
    message: err.message || 'Internal Server Error',
  });
};

export default ErrorHandler;
