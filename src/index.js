import express from 'express';
import bodyParser from 'body-parser';
import * as routes from './routes';
import ErrorHandler from '../src/middlewares/errors.handler.js';

const app = express();
const date = new Date();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', routes.userRouter);
app.use('/posts', routes.postRouter);
app.use('/comments', routes.commentRouter);

app.use(ErrorHandler);

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Backend Service Running.',
    timestamp: date.toString(),
  });
});

const port = parseInt(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
