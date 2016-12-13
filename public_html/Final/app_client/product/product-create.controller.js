(function() {

    'use strict';
    angular
        .module('app.product')
        .controller('ProductCreateController', ProductCreateController);

    ProductCreateController.$inject = ['ProductService'];
    
    function ProductCreateController(ProductService) {
        var vm = this;

        vm.data = {
        'Name': '',
        'Description': '',
        'Price': ''        
        };
        vm.submit = submit;
        vm.message = '';
        vm.title = 'Add Product';
        
        activate();

        ////////////
        
        function activate() {}   
        
        function submit() {
            ProductService.addProduct(vm.data)
                .then(function(data) {
                    vm.message = data;
                });
        }
        
       
    }

})();