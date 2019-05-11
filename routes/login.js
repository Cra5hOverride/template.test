//Require
const express = require('express');
const router = express.Router();



//Controller
const loginController = require('../controllers/loginController');

//Router
router.route('/').get(loginController.index);
router.route('/login').post(loginController.login);
//Exports
module.exports = router;