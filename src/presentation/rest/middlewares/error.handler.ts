import { Request, Response, NextFunction } from 'express';

export const ErrorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  res.status(status).json({
    status,
    message: err.message || 'Internal Server Error',
  });
};

export default ErrorHandler;
