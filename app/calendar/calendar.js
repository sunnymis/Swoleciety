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
        vm.singleDayExercises = {};
        vm.selectedDay = "";
        
        vm.getWeek = function() {
            var today = new Date();
            var day = today.getDay();
            var date = today.getDate() - day;
            var startDate = new Date(today.setDate(date));
            var endDate = new Date(today.setDate(date + 6));
            return startDate.toLocaleDateString().replace(/\//g,'-');
        }
        
        vm.loadExercisesForWeek = function() {
            var currentWeek = vm.getWeek(); 
            var exercises = $firebaseArray(firebaseUserExerciseService.getUserExercises('smistry',currentWeek));
            exercises.$loaded()
            .then(function() {
                angular.forEach(exercises, function(exercise) {
                    if (exercise instanceof Object) {
                        angular.forEach(exercise, function(e) {
                            if (e.day !== undefined) {
                                vm.weeklyExercises[e.day].push(e);        
                            }
                        });    
                    }
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
                        return exercise; 
                    }
                }
                
            });
        };
        
        vm.deleteExercise = function(exercise) {
            firebaseUserExerciseService.deleteExercise(exercise);
            
        };
        
        
        vm.loadSingleDay = function(day) {
            var currentWeek = vm.getWeek(); 
            var exercises = $firebaseArray(firebaseUserExerciseService.getUserExercises('smistry',currentWeek));
            exercises.$loaded()
            .then(function() {
                vm.singleDayExercises[day] = [];
                angular.forEach(exercises, function(exercise) {
                    if (exercise.day == day) {
                        vm.singleDayExercises[day].push(exercise);
                    }
                });
            });
            
        }; 
        
        
        
    }
    
})();