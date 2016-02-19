var app = angular.module('galvanizeeats', []);

app.controller('PostController', function($scope){
  $scope.formDisplay = false;
  $scope.toggleForm = function(){
    $scope.formDisplay = $scope.formDisplay === true ? false : true;
  }
  $scope.post = {};
  $scope.posts = [];
  $scope.addPost= function(){
    $scope.post.popularity = 0;
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
})
