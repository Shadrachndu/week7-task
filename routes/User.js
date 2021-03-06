const express = require('express');

const router = express.Router();
//Let's import signUp function from controllers folder
const { signUp, signIn, getUsers } = require('../controllers/User')

router.post('/signup', signUp);
router.post('/signin', signIn)
router.get('/', getUsers)


module.exports = router;