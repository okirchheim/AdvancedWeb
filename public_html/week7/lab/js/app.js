
// this app page is used to link html pages to controllers
// Ive made a function to link pages to their controller and then have anjular inject into the config property. 
(function() {
    'use strict';
    angular
        .module('app',['ngRoute'])
        .config(config);

config.$inject=['$routeProvider'];

function config($routeProvider)
{
    $routeProvider.
            when('/', {
                templateUrl: 'js/phone-list.template.html',
                controller: 'PhoneListController',
                controllerAs: 'vm'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'js/phone-detail.template.html',
                controller: 'PhoneDetailController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo:'/'
                });
}
})();
