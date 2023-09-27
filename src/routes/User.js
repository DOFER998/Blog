const express = require('express');
const router = express.Router();
const UserController = require('../controller/User');


router.get('/', UserController.user);

module.exports = router;
