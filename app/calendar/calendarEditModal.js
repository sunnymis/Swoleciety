(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarEditModalController',CalendarEditModalController);
    
    CalendarEditModalController.$inject = ['$uibModalInstance','exerciseDetails'];
    
    function CalendarEditModalController($uibModalInstance, exerciseDetails) {
        var vm = this; 
               
        vm.ed = exerciseDetails;
        console.log(vm.ed);
        
        vm.cancel = function() {
            console.log(exerciseDetails);
            $uibModalInstance.dismiss('cancel');
        }
    }
})();