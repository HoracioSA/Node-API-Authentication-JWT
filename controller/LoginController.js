const connection = require('../database/knex')
const{compare} =require('bcrypt')

module.exports ={
    async store(request, response){
        const {email, password}=request.body;
       const [user] = await connection.select('*').from('users').where({email});
        if(!user){
            throw new Error("Could not find the user")
        };
        const validPassword= await compare(password, user.password);
        console.log(validPassword)
        if (!validPassword) {
            throw new Error("Password is wrong")
        }

        return response.status(201).send(user);
    },
}