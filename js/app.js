var app = angular.module('galvanizeeats', []);

app.controller('PostController', function($scope){
  $scope.formDisplay = false;
  $scope.toggleForm = function(){
    $scope.formDisplay = $scope.formDisplay === true ? false : true;
  }
})
