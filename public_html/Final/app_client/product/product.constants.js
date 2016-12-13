(function() {
    'use strict';

    angular
        .module('app.product')
        .constant('REQUEST', {
            'Products' : '/api/v1/products'
        });
})();