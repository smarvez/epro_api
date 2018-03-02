
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('message').notNullable()
    table.timestamp('created_at').notNullable().defaultsTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultsTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
};
