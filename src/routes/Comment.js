const express = require('express');
const router = express.Router();
const CommentController = require('../controller/Comment')


router.get('/', CommentController.comment)

module.exports = router;