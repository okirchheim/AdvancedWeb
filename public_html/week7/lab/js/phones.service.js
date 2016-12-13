//Iidentify the controller and configuration information used to configure what will be injected.
//Identify services and identify their functions.

(function()
{
    'use strict';    
    angular
        .module('app')
        .factory('PhonesService', PhonesService);
    
    PhonesService.$inject = ['$http', 'REQUEST']; //prepare angular's injection
    function PhonesService($http, REQUEST) // create service and direct it where to go
    {        
        var url = REQUEST.Phones;
        var service = {
            'getPhones': getPhones,
            'findPhone': findPhone
        };
        return service; //Bring back data
        
        ///////////        
        
        function getPhones()//Create function to make call and how to respond
        {
            return $http.get(url)
                    .then(getPhonesComplete, getPhonesFailed);
            
            function getPhonesComplete(response)
            {
                return response.data;
            }
        
            function getPhonesFailed(error)
            {
                return [];
            }           
        }
        
        function findPhone(id) // Create function to identify single data element (ID as a parameter)
        {             
             return getPhones()
                     .then(function(data)
                        {
                            return findPhoneComplete(data);
                        });
             
            function findPhoneComplete(data) // Create function to gather data
            {
                 var results = {};
                 
                 angular.forEach(data,function(value, key)
                 {
                     if (!results.length)// Make sure there is data(validation)
                     {
                         if(value.hasOwnProperty('id') && value.id === id)// If data exists and matches parameter, have angular copy data
                         {
                             results = angular.copy(value);
                         }
                     }
                 }, results);
                 return results;
            }
         }
    }        
})();
