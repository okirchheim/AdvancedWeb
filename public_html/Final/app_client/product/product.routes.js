 (function() {

    'use strict'; 
    angular
        .module('app.product')
        .config(config);
  
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
      $routeProvider.
          when('/', {
              templateUrl: '/product/product-home.view.html',
              controller: 'ProductHomeController',
              controllerAs: 'vm'
          }).
          when('/add', {
              templateUrl: '/product/product-form.view.html',
              controller: 'ProductCreateController',
              controllerAs: 'vm'
          }).
          when('/update/:id', {
              templateUrl: '/product/product-form.view.html',
              controller: 'ProductUpdateController',
              controllerAs: 'vm'
          }).
          otherwise({
            redirectTo: '/'
          });
    }

})();