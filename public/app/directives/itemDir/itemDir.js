angular.module('todo').directive('itemDir', function($timeout) {
  return {
    scope: {
      theItem: '=',
      advanceItem: '&',
    },
    templateUrl: 'app/directives/itemDir/itemDirTmpl.html',
    link: function(scope, elem, attr) {
      var timeout;
      scope.advance = function() {
        if (scope.checked) {
          elem.css('text-decoration', 'line-through');
          timeout = $timeout(function() {
            scope.advanceItem({id: scope.theItem._id});
          }, 3000);
        } else {
          $timeout.cancel(timeout);
          elem.css('text-decoration', 'none');
        }
      };
    },
  };
});
