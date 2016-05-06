(function() {
  'use strict';
  angular.module('iui.basic', ['iui.basicTemplates', 'iuiBasic']);
})();
(function() {
  'use strict';

  angular.module('iuiBasic', []);

})();
(function() {
  'use strict';

  var iuiBasicConfig = {};

  angular.module('iuiBasic')
    .value('iuiBasicConfig', iuiBasicConfig);

})();
(function() {
  'use strict';

  // Follow the Angular Style Guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

  angular.module('iuiBasic')
    .directive('iuiBasic', iuiBasic);

  function iuiBasic() {
    var directive = {
      restrict: 'E',
      templateUrl: '/$iui-basic/iui-basic/iui-basic.html',
      // Controller names must be capitalized because they are constructors
      controller: BasicController,
      // controllerAs & bindToController in directive syntax is only available in Ang 1.3+
      controllerAs: 'basic',
      bindToController: true,
      scope: {
        name: '='
      }
    };
    return directive;
  }

  BasicController.$inject = [];

  function BasicController() {
    // Define Variables up top
    var vm = this;
    vm.hello = 'Hello';
    // Public methods are listed here:
    vm.exampleMethod = exampleMethod;

    // if activate function is necessary
    // this gives you the ability to order the sequence of method calls
    // made when the directive is created
    activate();


    // Methods in the form of function syntax below

    function activate() {

    }

    function exampleMethod() {
      return 'foo';
    }
  }


})();
(function(module) {
try {
  module = angular.module('iui.basicTemplates');
} catch (e) {
  module = angular.module('iui.basicTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/$iui-basic/iui-basic/iui-basic.html',
    '<section>\n' +
    '  {{basic.hello}} {{basic.name}}\n' +
    '</section>');
}]);
})();
