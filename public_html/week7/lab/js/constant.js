//Here we identify the services, directives, controllers, filters, 
//and configuration information used to configure what will be injected.

(function () {
    'use strict';
    
    angular 
            .module('app')
            .constant('REQUEST', {
                'Phones': './data/phones.json'
        });
})();
