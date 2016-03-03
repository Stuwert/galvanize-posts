app.service('hitApi', ['$http', function($http){
  this.getAllPosts = function(){
    return $http.get('/api/posts')
  }

  this.createPost = function(data){
    return $http.post('/api/posts', data).then(function(items){
      return items;
    })
  }

  this.getComments = function(postnum){
    return $http.get('/api/posts/' + postnum + '/comments/')
  }

  this.createComment = function(postnum, commentdata){
    return $http.post('/api/posts/' + postnum + '/comments', commentdata).then(function(items){
      return items;
    })
  }

}])
