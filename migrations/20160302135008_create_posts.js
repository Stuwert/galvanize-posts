
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.timestamp('create_at');
    table.string('title');
    table.string('author');
    table.string('image_url');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
