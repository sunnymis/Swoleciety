(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarController',CalendarController);
    
    CalendarController.$inject = ['$firebaseArray', 
                                  '$firebaseObject', 
                                  'firebaseUserExerciseService',
                                  'firebaseUserService',
                                  'FIREBASE_URL',
                                  '$uibModal'];
    
    function CalendarController($firebaseArray, 
                                 $firebaseObject, 
                                 firebaseUserExerciseService,
                                 firebaseUserService,
                                 FIREBASE_URL,
                                 $uibModal) {
        var vm = this; 
        vm.days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        vm.weeklyExercises = {}; 
        angular.forEach(vm.days, function(day) {
            vm.weeklyExercises[day] = [];
        });
        
        vm.singleExercise; 
        
        vm.loadExercisesForWeek = function() {
            var exercises = $firebaseArray(firebaseUserExerciseService.getUserExercises('smistry'));
            exercises.$loaded()
            .then(function() {
                angular.forEach(exercises, function(exercise) {
                    vm.weeklyExercises[exercise.day].push(exercise);
                });
            });
        };
        
        vm.openCalendarEditModal = function(exercise,day) { 
            $uibModal.open({
                animation: true,
                templateUrl: 'calendar/calendarEditModal.html',
                controller: 'CalendarEditModalController',
                controllerAs: 'vm',
                size: 'md',
                resolve: {
                    exerciseDetails: function() {
                        angular.forEach(vm.weeklyExercises[day], function(ex) {
                            if (ex.name === exercise.name) {
                                console.log('returned ' + ex.name);
                                vm.singleExercise = exercise;         
                            }
                        }); 
                        return vm.singleExercise; 
                    }
                }
                
            });
        };
        
        vm.deleteExercise = function(exercise) {
            firebaseUserExerciseService.deleteExercise(exercise);
            
        }
        
        
        
    }
    
})();