const jwt = require('jsonwebtoken')
module.exports=function (request,response, next) {
    const token = request.header('auth_token')
    if (!token) {
        return response.status(401).send({
            message:'Access Denied'
        })
    }
    try {
        const verified=jwt.verify(token, process.env.SECRET_TOKEN)
        request.user=verified;
        next();
    } catch (error) {
        response.status(400).send({message:'Invalid Token'})
    }
}