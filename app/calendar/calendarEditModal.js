(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarEditModalController',CalendarEditModalController);
    
    CalendarEditModalController.$inject = ['$uibModalInstance',
                                           'exerciseDetails', 
                                           'firebaseUserExerciseService',
                                           'firebaseSetService',
                                           '$firebaseArray'];
    
    function CalendarEditModalController($uibModalInstance, 
                                          exerciseDetails, 
                                          firebaseUserExerciseService,
                                          firebaseSetService,
                                          $firebaseArray) {
        
        var vm = this; 
        
        vm.exercise = exerciseDetails;
        vm.editedSet = null; 
        vm.originalSet = null;
        vm.sets = firebaseSetService.getSets(vm.exercise);
        vm.sets.$loaded(function() {
           console.log(vm.sets); 
        });
        
        vm.addSet = function(exercise) { 
            vm.sets.$add({
                "reps": 1,
                "weight": 1
            });
        };
        
        vm.removeSet = function(exercise,key) {
            vm.sets.$remove(vm.sets[key]);
        };
        
        vm.saveSet = function(exercise,set,key) {
            console.log('here');
            vm.sets.$save(vm.sets[key]);
        };
        
        vm.ok = function() { 
            $uibModalInstance.close();
        };
        
        vm.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
    }
})();