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
        vm.weekDates = [];
        vm.weeklyExercises = {}; 
        angular.forEach(vm.days, function(day) {
            vm.weeklyExercises[day] = [];
        });
        vm.singleDayExercises = {};
        vm.selectedDay = "";
        
        
        vm.getWeek = function(today) {
            var today = today || new Date();
            var day = today.getDay();
            var date = today.getDate() - day;
            var startDate = new Date(today.setDate(date));
            var endDate = new Date(today.setDate(date + 6));
            return startDate.toLocaleDateString().replace(/\//g,'-');
        }
        
        vm.updateWeekDates = function(start) {
            var startDate =  new Date(vm.getWeek());
            vm.weekDates = vm.days.map(function(value, index) {
                var flag = 1;
                if (index == 0) {
                    flag = 0; 
                }
                return {
                    day: value,
                    date: new Date(startDate.setDate(startDate.getDate() + flag))
                }
            });
        }
        
        vm.loadExercisesForWeek = function(week) {
            var currentWeek = week || vm.getWeek();
            if (currentWeek == week) {
                vm.weeklyExercises = {};
                angular.forEach(vm.days, function(day) {
                    vm.weeklyExercises[day] = [];
                });
            }
            var exercises = $firebaseArray(firebaseUserExerciseService.getUserExercises('smistry',currentWeek));
            exercises.$loaded()
            .then(function() {
                
                angular.forEach(exercises, function(exercise) {
                    angular.forEach(exercise, function(e) {
                        if (e instanceof Object) {
                            console.log(e);
                            vm.weeklyExercises[e.day].push(e);
                        }
                    });    
                    
                });
            });
            vm.updateWeekDates();
            
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
        
        
        vm.getPreviousWeek = function() {
            var currentStartOfWeek = new Date(vm.getWeek());
            var lastWeek = vm.getWeek(new Date(currentStartOfWeek.setDate(currentStartOfWeek.getDate() - 7)));
            vm.updateWeekDates(new Date(lastWeek));
            vm.loadExercisesForWeek(lastWeek);
        }
        
        vm.getNextWeek = function() {
            var currentStartOfWeek = new Date(vm.getWeek());
            var nextWeek = vm.getWeek(new Date(currentStartOfWeek.setDate(currentStartOfWeek.getDate() + 7)));
            vm.updateWeekDates(new Date(nextWeek));
            vm.loadExercisesForWeek(nextWeek);
        }
        
        
        
        
    }
    
})();