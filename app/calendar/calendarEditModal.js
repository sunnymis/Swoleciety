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
            firebaseUserExerciseService.removeSet(exercise,key);
        };
        
        vm.saveSet = function(exercise,set,key) {
            firebaseUserExerciseService.saveSet(exercise,set,key);
        };
        
        vm.editSet = function(set) {
            vm.editedSet = set; 
            vm.originalSet = angular.extend({},vm.editedSet);
        };
        
        vm.ok = function() { 
            $uibModalInstance.close();
        };
        
        vm.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
    }
})();