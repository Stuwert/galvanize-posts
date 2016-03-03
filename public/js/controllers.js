app.controller('RedditController', function($scope){
  $scope.formDisplay = false;
  $scope.toggleForm = function(){
    $scope.formDisplay = !$scope.formDisplay;
  }
  $scope.ordered = '-popularity'
  $scope.post = {};

  $scope.searchVal;
  
  $scope.posts = [{
    popularity: 0,
    showComment: false,
    comments: [{
      title: "You're Wrong",
      author: "Bing Bong",
      text: "I have no idea why you wouldn't believe this."
    }],
    title: 'I love dogs',
    time: new Date().setFullYear(2015, 6, 1),
    author: 'Bing Bong',
    description: "This is too cool to be real",
    image: 'http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg'
  }];

  $scope.containsValue = function(){
    for(var information in $scope.post){
      if($scope.post[information]){
        return true;
      }
    }
    return false;
  };

  $scope.comment = {};

  $scope.addPost= function(){
    $scope.post.popularity = 0;
    $scope.post.showComment = false;
    $scope.post.showAddComment = false;
    $scope.post.comments = [];
    $scope.posts.push($scope.post);
    $scope.post = {};
    $scope.postForm.$setPristine();
    $scope.toggleForm();
  }
  $scope.updateOrder = function(newOrder){
    $scope.ordered = newOrder;
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
      console.log("This is hitting");
      $scope.posts.forEach(function(post){
        post.showAddComment = false;
      })
      $scope.posts[index].showAddComment = true;
    }
  }

  $scope.toggleComment = function(index){
    $scope.posts[index].showComment = $scope.posts[index].showComment === false ? true : false;
  }

  $scope.createComment = function(index){
    $scope.posts[index].comments.push($scope.comment);
    $scope.comment = {};
    $scope.toggleComment(index);
    $scope.toggleAddComment(index);
  }
})
