angular.module('todo').controller('mainCtrl', function($scope, service) {
  function getItems() {
    service.getItems().then(function(res) {
      $scope.items = res;
    });
  };

  getItems();
  $scope.addItem = function() {
    service.addItem($scope.newItem).then(function(res) {
      $scope.newItem = '';
      getItems();
    });
  };
});
