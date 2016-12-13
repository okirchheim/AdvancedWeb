
//Iidentify the controller and configuration information used to configure what will be injected.
//Also gather and pass array of information to be used

(function () {
    
    'use strict';
    angular
            .module('app')
            .controller('PhoneListController', PhoneListController);
    
    PhoneListController.$inject=['PhonesService'];
    
    function PhoneListController(PhonesService){
        var vm = this;
        
        vm.phones = [];
        
        activate();
        
        ////////////////////
        
        
        function activate(){
            PhonesService.getPhones().then(function(response){vm.phones = response; });
        }
    }
})();