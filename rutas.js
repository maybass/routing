
const express = require('express')
const router = express.Router()
const {inicio} = require('../controllers/controller')


router.get('/', inicio)


module.exports = router