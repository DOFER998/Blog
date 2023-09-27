const express = require('express');
const app = express();
const date = new Date();
const bodyParser = require('body-parser')
const apiErrorHandler = require('../src/error/errorHandler')


const userRouter = require('../src/routes/User');
const postRouter = require('../src/routes/Post');
const commentRouter = require('../src/routes/Comment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);

app.use(apiErrorHandler);

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Backend Service Running.",
        timestamp: date.toString()
    })
});

const port = parseInt(process.env.PORT) || 4000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
