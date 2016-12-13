(function() {

    /* we have our service handler here to access the Products API*/
    
    'use strict';
    angular
        .module('app.product')
        .factory('ProductService', ProductService);

    ProductService.$inject = ['$http', 'REQUEST'];

    function ProductService($http, REQUEST) {

        var url = REQUEST.Products;
        var service = {
            'getProducts' : getProducts,
            'getProduct' : getProduct,
            'deleteProduct' : deleteProduct,
            'addProduct' : addProduct,
            'updateProduct' : updateProduct
        };
        return service;

        ////////////

        function getProducts() {
            return $http.get(url)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return response.data;
            }

            function getFailed(error) {
                return [];
            }
        }
        
         function getProduct(_id) {
            var oneUrl = url + '/' + _id;
            return $http.get(oneUrl)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return response.data;
            }

            function getFailed(error) {
                return [];
            }
        }
        
        function deleteProduct(_id) {
            var delUrl = url + '/' + _id;
            
            return $http.delete(delUrl)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return 'Delete Completed';
            }

            function getFailed(error) {
                return 'Delete Failed';
            }
        }
        
        
        function addProduct(data) {            
            return $http.post(url, data)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return 'Product Added';
            }

            function getFailed(error) {
                return 'Product Add Failed';
            }
        }
        
        function updateProduct(_id, data) {
            var updateUrl = url + '/' + _id;
            
            return $http.put(updateUrl, data)
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return 'Product Updated';
            }

            function getFailed(error) {
                return 'Product Update Failed';
            }
        }
        
        

    }
    
})();