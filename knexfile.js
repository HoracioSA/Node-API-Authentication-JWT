// Update with your config settings.

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};


require('dotenv').config();
const { CLIENT, DATABASE, PG_USER, PASSWORD, HOST, PG_PORT } = process.env;
module.exports = {

  development: {
    client:CLIENT,
    connection: {
      database:DATABASE,
      user:PG_USER,
      password:PASSWORD,
      host:HOST,
      port:PG_PORT,
    },
    migrations:{
      directory: __dirname + '/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
