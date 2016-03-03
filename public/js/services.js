app.service('hitApi', ['$http', function($http){
  this.getAllPosts = function(){
    return $http.get('/api/posts' ).then(function(items){
      return items;
    })
  }

  this.createPost = function(data){
    return $http.post('/api/posts', data).then(function(items){
      return items;
    })
  }

  this.getComments = function(postnum, commentnum){
    return $http.get('/api/posts/' + postnum + '/comments/' + commentnum).then(function(items){
      return items;
    })
  }

  this.createComment = function(postnum, commentdata){
    return $http.post('/api/posts/' + postnum + '/comments', commentdata).then(function(items){
      return items;
    })
  }

}])
