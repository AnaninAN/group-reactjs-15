const express = require('express')

const UserController = require('../controllers/user')

const router = express.Router()

router.get('/contacts', UserController.getContacts)
router.put('/', UserController.updateUser)

module.exports = router