
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.timestamp('created_at');
    table.integer('post_id')
    table.string('title');
    table.string('author');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
