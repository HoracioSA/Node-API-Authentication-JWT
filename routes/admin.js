const router = require('express').Router()
const verify= require('./verifyToken')
router.get('/',verify,(request, response)=>{
//response.json({posts:{title:'Admin Area', description:'This area is only for Admin'}})
response.send(request.user)
})

module.exports =router;