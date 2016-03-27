(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarController',CalendarController);
    
    CalendarController.$inject = ['$firebaseArray', 
                                  '$firebaseObject', 
                                  'firebaseUserExerciseService',
                                  'FIREBASE_URL'];
    
    function CalendarController($firebaseArray, 
                                 $firebaseObject, 
                                 firebaseUserExerciseService,
                                 FIREBASE_URL) {
        var vm = this; 
        vm.days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        vm.weeklyExercises = {}; 
        angular.forEach(vm.days, function(day) {
            vm.weeklyExercises[day] = [];
        });
        
        vm.loadExercisesForWeek = function() {
            var exercises = $firebaseArray(firebaseUserExerciseService.getUserExercises('smistry'));
            exercises.$loaded()
            .then(function() {
                angular.forEach(exercises, function(exercise) {
                    vm.weeklyExercises[exercise.day].push(exercise);
                    console.log(vm.weeklyExercises);
                });
            });
            
        }
        
//        
//        vm.days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
//        vm.weeklyExercises = {};
//        angular.forEach(vm.days, function(day) {
//            vm.weeklyExercises[day] = [];
//        });
//            
//        vm.loadExercisesForDay = function() {
//            angular.forEach(vm.days, function(day) {
//                var ref = new Firebase(FIREBASE_URL + '/users/smistry/exercises/').child(day);
//                var allExercises = $firebaseArray(ref);
//                allExercises.$loaded()
//                .then(function() { 
//                    angular.forEach(allExercises, function(value) {
//                        vm.weeklyExercises[day].push({"id": value.$id, "value": value.$value}); 
//                    });
//                }); 
//            });
//        }
    }
    
})();