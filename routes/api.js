var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/posts', function(req, res, next) {
  Posts().select().then(function(posts){
    console.log(posts);
    res.send(posts)
  })

});

router.get('/posts/:postid/comments', function(req, res, next){
  console.log("this is hitting");
  Comments().where('post_id', req.params.postid).then(function(comments){
    res.send(comments)
  })

})


router.get('/posts/:id', function(req, res, next){

})

router.post('/posts/', function(req, res, next){

})

router.post('/posts/:postid/comments', function(req, res, next){
  Comments().insert({
    title: req.body.title,
    author: req.body.author,
    description: req.body.text,
    post_id: req.params.postid
  }).then(function(item){
    res.send(item)
  })

})

function Posts(){
  return knex('posts');
}

function Comments(){
  return knex('comments');
}

module.exports = router;
