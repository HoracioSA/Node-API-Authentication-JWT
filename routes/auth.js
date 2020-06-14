const router = require('express').Router();

router.post('/register', (request,response)=>{
    response.send('Registered successfuly!')
})
module.exports = router;