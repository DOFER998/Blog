const express = require('express');
const router = express.Router();
const PostController = require('../controller/Post')


router.get('/', PostController.post)

module.exports = router;