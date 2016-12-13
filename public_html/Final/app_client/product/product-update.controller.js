(function() {

    'use strict';
    angular
        .module('app.product')
        .controller('ProductUpdateController', ProductUpdateController);

    ProductUpdateController.$inject = ['ProductService', '$routeParams'];
    
    function ProductUpdateController(ProductService, $routeParams) {
        var vm = this;

        vm.data = {
            'Name': '',
            'Descriptiom': '',
            'Price': ''           
        };
        vm.submit = submit;
        vm.message = '';
        vm.title = 'Update Product';
        
        var _id = $routeParams.id;
        
        activate();

        ////////////
        
        function activate() {
            getProduct();
        }   
        /* we can use the same form as the add-controller by updating the data model
         * so it will display on the form as an update form
         */
        function getProduct() {
            ProductService.getProduct(_id)
                .then(function(data) {
                   vm.data.Name =  data.Name;
                   vm.data.Description =  data.Description;
                   vm.data.Price =  data.Price;
                   
                });
        }
        
        function submit() {
            ProductService.updateProduct(_id, vm.data)
                .then(function(data) {
                    vm.message = data;
                });
        }
        
       
    }

})();

