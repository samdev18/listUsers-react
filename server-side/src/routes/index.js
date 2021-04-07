const express = require('express')
const router = express.Router();
const UsersController = require('../controllers/UsersController')
module.exports = router
    .get('/', UsersController.searchAll)
    .get('/search/:name', UsersController.searchByName)