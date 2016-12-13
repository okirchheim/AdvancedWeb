(function() {

    'use strict';
    angular
        .module('app.product')
        .controller('ProductHomeController', ProductHomeController);

    ProductHomeController.$inject = ['ProductService', '$window'];
    
    function ProductHomeController(ProductService, $window) {
        var vm = this;

        vm.products = [];
        vm.deleteProduct = deleteProduct;
        vm.message = '';
        
        activate();

        ////////////
        
        function activate() {
            
            getProducts();
            
        }   
        
        function getProducts() {
            ProductService.getProducts()
                .then(function(data) {
                    vm.products = data;
                });
        }
        
        /* This is a simple way but the popup can be disabled so be aware */
        function deleteProduct(_id) {
            var confirm = $window.confirm('are you sure?');
            if ( confirm ) {
                ProductsService.deleteProduct(_id)
                    .then(function(msg) {
                         vm.message = msg;
                         getProducts();
                    });
            }
        }
       
    }

})();