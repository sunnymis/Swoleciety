(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarController',CalendarController);
    
    CalendarController.$inject = ['$firebaseArray', 
                                  '$firebaseObject', 
                                  'firebaseUserExerciseService',
                                  'FIREBASE_URL',
                                  '$uibModal'];
    
    function CalendarController($firebaseArray, 
                                 $firebaseObject, 
                                 firebaseUserExerciseService,
                                 FIREBASE_URL,
                                 $uibModal) {
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
        
        vm.openCalendarEditModal = function() { 
            $uibModal.open({
                templateUrl: 'calendar/calendarEdit.html',
                controller: 'CalendarController',
                size: 'md'
            });
        }
        
        
        
    }
    
})();