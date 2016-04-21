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
        vm.currentStartOfWeek = "";
        
        
        vm.getWeek = function(today) {
            var today = today || new Date();
            var day = today.getDay();
            var date = today.getDate() - day;
            var startDate = new Date(today.setDate(date));
            var endDate = new Date(today.setDate(date + 6));
            return startDate.toLocaleDateString().replace(/\//g,'-');
        }
        
        vm.updateWeekDates = function(start) {
            var startDate =  start || new Date(vm.getWeek());
            if (startDate == start) {
                console.log('updating week for startdate' + startDate);    
            }
            else {
                console.log('updating week for getweek' + vm.getWeek());
            }
            
            vm.weekDates = vm.days.map(function(value, index) {
                var offset = 1;
                if (index == 0) {
                    offset = 0; 
                }
                return {
                    day: value,
                    date: new Date(startDate.setDate(startDate.getDate() + offset))
                }
            });
            vm.currentStartOfWeek = vm.weekDates[0].date;
        }
        
        vm.loadExercisesForWeek = function(week) {
            var currentWeek = week || vm.getWeek();
            vm.currentStartOfWeek = new Date(currentWeek);
            if (currentWeek == week) {
                console.log('loading exercises for week ' + week);
                vm.weeklyExercises = {};
                angular.forEach(vm.days, function(day) {
                    vm.weeklyExercises[day] = [];
                });
            }
            else{
                console.log('loading exercises for week getweek ' + vm.getWeek());
            }
            var exercises = $firebaseArray(firebaseUserExerciseService.getUserExercises('smistry',currentWeek));
            exercises.$loaded()
            .then(function() {
                console.log(exercises);
                angular.forEach(exercises, function(exercise) {
                    angular.forEach(exercise, function(e) {
                        if (e instanceof Object && e != undefined) {
                            console.log(e);
                            vm.weeklyExercises[e.day].push(e);
                        }
                    });    
                    
                });
            });
            vm.updateWeekDates(vm.currentStartOfWeek);
            
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
        
/*        
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
     */   
        
        vm.getPreviousWeek = function() {
            var currentStartOfWeek = new Date(vm.getWeek());
            var lastWeek = vm.getWeek(new Date(currentStartOfWeek.setDate(currentStartOfWeek.getDate() - 7)));
            vm.updateWeekDates(new Date(lastWeek));
            vm.loadExercisesForWeek(lastWeek);
        }
        
        vm.getNextWeek = function() {
            var currentStartOfWeek = vm.currentStartOfWeek;
            var nextWeek = vm.getWeek(new Date(currentStartOfWeek.setDate(currentStartOfWeek.getDate() + 7)));
            vm.loadExercisesForWeek(nextWeek);
        }
        
        
        
        
    }
    
})();