(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarEditModalController',CalendarEditModalController);
    
    CalendarEditModalController.$inject = ['$uibModalInstance'];
    
    function CalendarEditModalController($uibModalInstance) {
        var vm = this; 
               
        vm.cancel = function() {
            console.log('here');
            $uibModalInstance.dismiss('cancel');
        }
    }
})();