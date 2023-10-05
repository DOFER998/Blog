import express, { NextFunction, Request, Response } from 'express';
import { graphqlRouter, restRouter } from './presentation';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const date = new Date();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/rest', restRouter);
app.use('/graphql', graphqlRouter);

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
