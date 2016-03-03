app.service('hitApi', ['$http', function($http){
  this.getAll = function(thing){
    return $http.get('/api/' + thing ).then(function(items){
      return items;
    })
  }

  this.getOne = function(thing, num){
    return $http.get('/api/' + thing + "/" + num).then(function(items){
      return items;
    })
  }

  this.postOne = function(thing, data){
    return $http.post('/api/' + thing, data).then(function(item){
      return item;
    })
  }

}])
