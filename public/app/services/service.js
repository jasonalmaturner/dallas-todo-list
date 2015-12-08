angular.module('todo').service('service', function($http) {
  this.getItems = function(query) {
    query = query ? '?status=' + query : '';
    return $http({
      method: 'GET',
      url: 'api/items' + query,
    }).then(function(res) {
      return res.data;
    });
  };

  this.addItem = function(item) {
    return $http({
      method: 'POST',
      url: 'api/items',
      data: item,
    });
  };

  this.advanceItem = function(id) {
    return $http({
      method: 'PUT',
      url: 'api/advance/' + id,
    });
  };
});
