var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/posts', function(req, res, next) {
  console.log("it's hitting");
  Posts().select().then(function(posts){
    res.send(posts)
  })

});

router.get('/posts/:postid/comments', function(req, res, next){

})

router.get('/posts/:postid/comments/:commentid', function(req, res, next){

})

router.get('/posts/:id', function(req, res, next){

})

router.post('/posts/', function(req, res, next){

})

router.post('/posts/:postid/comments', function(req, res, next){

})

function Posts(){
  return knex('posts');
}

function Comments(){
  return knex('comments');
}

module.exports = router;
