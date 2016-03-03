app.controller('RedditController', ['$scope', 'hitApi', function($scope, hitApi){

  $scope.formDisplay = false;

  $scope.toggleForm = function(){
    $scope.formDisplay = !$scope.formDisplay;
  }

  $scope.ordered = '-popularity';

  $scope.updateOrder = function(newOrder){
    $scope.ordered = newOrder;
  }

  $scope.post = {};

  $scope.searchVal;

  hitApi.getAllPosts().then(function(items){
    $scope.posts = items.data;
  });

  $scope.comment = {};

  $scope.addPost= function(){
    hitApi.createPost($scope.post);
    $scope.post = {};
    $scope.postForm.$setPristine();
    $scope.toggleForm();
  }

  $scope.createComment = function(index){
    hitApi.createComment(index, $scope.comment);
    $scope.comment = {};
    $scope.toggleComment(index);
    $scope.toggleAddComment(index);
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

  $scope.toggleAddComment = function(index){
    if ($scope.posts[index].showAddComment === true){
      $scope.posts[index].showAddComment = false;
    }else {
      $scope.posts.forEach(function(post){
        post.showAddComment = false;
      })
      $scope.posts[index].showAddComment = true;
    }
  }

  $scope.toggleComment = function(index){
    $scope.posts[index].showComment = $scope.posts[index].showComment === false ? true : false;
  }


}])
