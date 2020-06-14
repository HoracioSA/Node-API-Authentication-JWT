const connection = require('../database/knex');
//const crypto = require('crypto');
const bcrypt = require('bcrypt');
const saltRound = 10;
module.exports ={
    async store(request, response){
        const {name, email, password}=request.body;
        const salt = bcrypt.genSaltSync(saltRound);
        const hash = bcrypt.hashSync(password, salt)

        await connection('register').insert({
            name,
            email,
            password:hash
        })
        return response.status(201).send({
            message:'Registered good'
        })
    }
}