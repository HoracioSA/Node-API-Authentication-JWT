const connection = require('../database/knex')
const jwt = require('jsonwebtoken')
const{compare} =require('bcrypt')

module.exports ={
    async store(request, response){
        const {email, password}=request.body;
       const [user] = await connection.select('*').from('users').where({email});
        if(!user){
            // throw new Error("Could not find the user")
            return response.send({message:'Could not find email'})
        };
        const validPassword= await compare(password, user.password);
        console.log(validPassword)
        if (!validPassword) {
            return response.send({message:'Wrong Password'})
        }
        // Create or assign a JWT
        const token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN)
       return response.header('auth_token', token).send({token, user})
       
    }
}