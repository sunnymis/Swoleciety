(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarEditModalController',CalendarEditModalController);
    
    CalendarEditModalController.$inject = ['$uibModalInstance','exerciseDetails', 'firebaseUserExerciseService','$scope','$firebaseArray'];
    
    function CalendarEditModalController($uibModalInstance, exerciseDetails, firebaseUserExerciseService,$scope,$firebaseArray) {
        var vm = this; 
        
        vm.exercise = exerciseDetails;
        vm.editedSet = null; 
        vm.originalSet = null;
        vm.sets = null;
        
        vm.getSetsRef = function(exercise) {
            var sets = firebaseUserExerciseService.getSets(exercise);
            console.log(sets);
            vm.sets = sets; 
            return sets; 
        }
        
        vm.addSet = function(exercise) { 
            firebaseUserExerciseService.addSet(exercise);
        }
        
        vm.removeSet = function(exercise,key) {
            firebaseUserExerciseService.removeSet(exercise,key);
        }
        
        vm.saveSet = function(exercise,set,key) {
            firebaseUserExerciseService.saveSet(exercise,set,key);
        }
        
        vm.editSet = function(set) {
            vm.editedSet = set; 
            vm.originalSet = angular.extend({},vm.editedSet);
        }
        
        vm.ok = function() { 
            $uibModalInstance.close();
        }
        
        vm.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
        
    }
})();