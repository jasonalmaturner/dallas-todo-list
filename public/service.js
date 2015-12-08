angular.module('todo').service('service', function($http) {
  this.getItems = function() {
    return $http({
      method: 'GET',
      url: 'api/items',
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
});
