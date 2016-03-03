
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({title: 'This Website Sucks', author: 'Bing Bong', image_url: 'http://vignette4.wikia.nocookie.net/disney/images/8/85/1923_BingBong_InsideOut_501_copie.jpg/revision/latest?cb=20150619123838', description: "I have abaoslutely no idea why anyone would use this stupid piece of garbage."})
  );
};
