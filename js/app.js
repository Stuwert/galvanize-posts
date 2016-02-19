var app = angular.module('galvanizeeats', []);

app.controller('PostController', function($scope){
  $scope.formDisplay = false;
  $scope.toggleForm = function(){
    $scope.formDisplay = $scope.formDisplay === true ? false : true;
  }
  $scope.post = {};
  $scope.posts = [];
  $scope.addPost= function(){
    $scope.posts.push($scope.post);
    $scope.post = null;
    console.log($scope.posts);
  }
})
