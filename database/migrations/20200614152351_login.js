
exports.up = function(knex) {
  return knex.schema.createTable('login',function(table){
      table.increments().primary()
      table.string('email',255).notNullable()
      table.string('password',100).notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('login')
};
