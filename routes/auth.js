const router = require('express').Router();
const RegisterController= require('../controller/RegisterController')

router.post('/register',RegisterController.store )
module.exports = router;