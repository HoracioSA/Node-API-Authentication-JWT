const router = require('express').Router();
const RegisterController= require('../controller/RegisterController')
const LoginController=require('../controller/LoginController')
const { celebrate, Joi,Segments, errors} =require('celebrate')


router.post('/register',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(6),
        email: Joi.string().required().email(),
        password:Joi.string().required().min(6)
    })
}, { abortEarly: false }), RegisterController.store )
router.post('/login',LoginController.store)
module.exports = router;