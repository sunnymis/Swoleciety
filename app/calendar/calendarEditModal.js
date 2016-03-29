(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarEditModalController',CalendarEditModalController);
    
    CalendarEditModalController.$inject = ['$uibModalInstance','exerciseDetails', 'firebaseUserExerciseService'];
    
    function CalendarEditModalController($uibModalInstance, exerciseDetails, firebaseUserExerciseService) {
        var vm = this; 
               
        vm.exercise = exerciseDetails;
        
        vm.addSet = function(exercise) { 
            firebaseUserExerciseService.addSet(exercise);
        }
        
        vm.removeSet = function(exercise,key) {
            firebaseUserExerciseService.removeSet(exercise,key);
        }
        
        vm.ok = function() { 
            $uibModalInstance.close();
        }
        vm.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();