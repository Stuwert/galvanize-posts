var app = angular.module('galvanize-posts', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/views/allposts.html'
    })
    .when('/posts/new', {
      templateUrl: '/views/createpost.html'
    })
})
