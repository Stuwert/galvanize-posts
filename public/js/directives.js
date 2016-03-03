app.directive('grabComments', function(){
  return {
    controller: ['$scope', 'hitApi', function($scope, hitApi){
      $scope.updateComments = function(){
        return hitApi.getComments($scope.post).then(function(comments){
          $scope.comments = comments.data
        })
      }
      $scope.updateComments();
      console.log($scope.comments);
    }],
    scope: {
      post: '='
    },
    templateUrl: 'views/comments.html',
  }
})
