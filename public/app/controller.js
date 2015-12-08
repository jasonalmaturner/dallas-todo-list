angular.module('todo').controller('mainCtrl', function($scope, service) {

  $scope.options = [{
    name: 'New',
    value: 'new',
  }, {
    name: 'In Progress',
    value: 'inProgress',
  }, {
    name: 'Completed',
    value: 'complete',
  }, {
    name: 'Archived',
    value: 'archived',
  }];

  $scope.addItem = function() {
    service.addItem($scope.newItem).then(function(res) {
      $scope.newItem = '';
      $scope.getItems();
    });
  };

  $scope.query = $scope.options[0].value;
  $scope.getItems = function() {
    service.getItems($scope.query).then(function(res) {
      $scope.items = res;
    });
  };

  $scope.advanceItem = function(id) {
    service.advanceItem(id).then(function(res) {
      $scope.getItems();
    });
  };

  $scope.getItems();
});
