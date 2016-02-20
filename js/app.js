var app = angular.module('galvanizeeats', []);

app.controller('RedditController', function($scope){
  $scope.formDisplay = false;
  $scope.toggleForm = function(){
    $scope.formDisplay = $scope.formDisplay === true ? false : true;
  }
  $scope.post = {};
  $scope.posts = [{
    popularity: 0,
    showComment: false,
    comments: [{
      title: "You're Wrong",
      author: "Bing Bong",
      text: "I have no idea why you wouldn't believe this."
    }],
    title: 'I love dogs',
    time: '12/27/2015',
    author: 'Bing Bong',
    description: "This is too cool to be real",
    image: 'http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg'
  }];
  $scope.addPost= function(){
    $scope.post.popularity = 0;
    $scope.post.showComment = false;
    $scope.post.comments = [];
    $scope.posts.push($scope.post);
    $scope.post = {};
    console.log($scope.posts);
  }
  $scope.colorClass = function(popularity){
    if (popularity > 0){
      return 'green';
    }else if (popularity < 0){
      return 'red';
    }else {
      return 'black';
    }
  }

  $scope.toggleComment = function(index){
    $scope.posts[index].showComment = $scope.posts[index].showComment === false ? true : false;
  }
})
