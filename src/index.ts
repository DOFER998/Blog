import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import ErrorHandler from './middlewares/errors.handler';
import { commentRouter, postRouter, userRouter } from './routes/index.routes';

const app = express();
const date = new Date();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.use(ErrorHandler);

app.get('/', (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    message: 'Backend Service Running.',
    timestamp: date.toString(),
  });
});

const port = parseInt(process.env.PORT || '4000');
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
