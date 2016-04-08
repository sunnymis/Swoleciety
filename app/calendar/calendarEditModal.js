(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarEditModalController',CalendarEditModalController);
    
    CalendarEditModalController.$inject = ['$uibModalInstance','exerciseDetails', 'firebaseUserExerciseService'];
    
    function CalendarEditModalController($uibModalInstance, exerciseDetails, firebaseUserExerciseService) {
        var vm = this; 
               
        /*
            TODO: 
            1. There should be 3 input boxes, sets, reps and weight
            BUG:  
            2. Every time you add a new row, all input boxes reset to 1
        */
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