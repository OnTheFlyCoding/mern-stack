//Register/Create user, Login, get user information
const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    getMe,
} = require('../controllers/userControllers')
const {protect} = require('../middleware/authMiddleware')
//ROUTES
// (root/: api/users/)
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)


module.exports = router