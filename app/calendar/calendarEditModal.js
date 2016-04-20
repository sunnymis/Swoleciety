(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarEditModalController',CalendarEditModalController);
    
    CalendarEditModalController.$inject = ['$uibModalInstance','exerciseDetails', 'firebaseUserExerciseService','$scope','$firebaseArray'];
    
    function CalendarEditModalController($uibModalInstance, exerciseDetails, firebaseUserExerciseService,$scope,$firebaseArray) {
        var vm = this; 
               
        /*
            TODO: 
            1. There should be 3 input boxes, sets, reps and weight
            BUG:  
            2. Every time you add a new row, all input boxes reset to 1
            
        var ref = new Firebase('https://swoleciety.firebaseio.com/userExercises/smistry');
        var exRef = ref.child(exercise.name);
        
        vm.sets = $firebaseArray(exRef);
        
        $scope.$watch('vm.sets', function() {
            
        })
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