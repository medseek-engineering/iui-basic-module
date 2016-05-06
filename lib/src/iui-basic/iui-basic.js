(function() {
  'use strict';

  angular.module('iuiBasic')
    .directive('iuiBasic', iuiBasic);

  function iuiBasic() {
    var directive = {
      restrict: 'E',
      templateUrl: '/$iui-basic/iui-basic/iui-basic.html',
      controller: iuiBasicController,
      scope: {
        steps: '='
      }
    };
    return directive;
  }

  iuiBasicController.$inject = [];

  function iuiBasicController() {
    
  }


})();