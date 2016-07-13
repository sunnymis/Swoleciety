(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarController',CalendarController);
    
    CalendarController.$inject = ['$firebaseArray', 
                                  '$firebaseObject', 
                                  'firebaseUserExerciseService',
                                  'firebaseUserService',
                                  'firebaseAuthService',
                                  'dateService',
                                  'FIREBASE_URL',
                                  '$uibModal'];
    
    function CalendarController($firebaseArray, 
                                 $firebaseObject, 
                                 firebaseUserExerciseService,
                                 firebaseUserService,
                                 firebaseAuthService,
                                 dateService,
                                 FIREBASE_URL,
                                 $uibModal) {
        
        var vm = this,
            authedUser = firebaseAuthService.getAuth(); 
        vm.days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        vm.weekDates = [];
        vm.weeklyExercises = {}; 
        angular.forEach(vm.days, function(day) {
            vm.weeklyExercises[day] = null;
        });
        vm.currentStartOfWeek = ""; 
        vm.exerciseList = $firebaseArray(firebaseUserExerciseService.getUserExercises(authedUser.uid,dateService.getWeek()));
        
        
        vm.singleDayExercises = {};
        vm.selectedDay = ""; // this is ngmodel for mobile view. eventually move out to a mobile controller
        
        
        //////////////////////////////////////////////////////// 
        //this is ngmodel for mobile view. eventually move out to a mobile controller
        vm.singleDayExercises = {};
        vm.selectedDay = ""; 
        ////////////////////////////////////////////////////////
        
        
        
        /**
         * Updates the 7 dates for the week. Uses the current week if no parameter is passed
         * Maintains the current starting day you are viewing
         * @start - [optional] Date to begin the 7 days 
         * @returns - Populates an object array containing the day of the week and its date in MM/dd/YYYY form
         */ 
        vm.updateWeekDates = function(newStartDate) {
            var startDate =  newStartDate || new Date(dateService.getWeek());
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
        
        /**
         * Gets all the exercises that belong to either the given week or current week (if no parameters)
         * and saves it to an array
         * @week - [optional] The week to load data from
         * @returns - A populated object containing a list of exercises for each day
         */
        vm.loadExercisesForWeek = function(week) {
            var currentWeek = week || dateService.getWeek();
            vm.currentStartOfWeek = new Date(currentWeek);
            if (currentWeek == week) {
                // Reset the lists for each day because we are looking at a new week
                vm.weeklyExercises = {};
                angular.forEach(vm.days, function(day) {
                    vm.weeklyExercises[day] = null;
                });
            }
            var testArray = [];
            var exercises = $firebaseArray(firebaseUserExerciseService.getUserExercises(authedUser.uid,currentWeek));
            exercises.$loaded()
            .then(function() {
                angular.forEach(exercises, function(exercise) {
                    if (exercise instanceof Object && exercise != undefined) {
                        vm.weeklyExercises[exercise.day] =($firebaseArray(firebaseUserExerciseService.getUserExercises(authedUser.uid,dateService.getWeek(),exercise.day)));
                    }
                });
                vm.updateWeekDates(vm.currentStartOfWeek);

                console.log(vm.currentStartOfWeek);
            console.log(vm.weeklyExercises);
            });
        };
        
        vm.loadExercisesForSingleDay = function(day) {
        };
        
        
        /*
         * Loads the previous week
         */
        vm.getPreviousWeek = function() {
            var currentStartOfWeek = vm.currentStartOfWeek;
            var lastWeek = dateService.getWeek(new Date(currentStartOfWeek.setDate(currentStartOfWeek.getDate() - 7)));
            vm.loadExercisesForWeek(lastWeek);
        }
        
        /*
         * Loads the next week
         */
        vm.getNextWeek = function() {
            var currentStartOfWeek = vm.currentStartOfWeek;
            var nextWeek = dateService.getWeek(new Date(currentStartOfWeek.setDate(currentStartOfWeek.getDate() + 7)));
            vm.loadExercisesForWeek(nextWeek);
        }
        
        /*
         * Opens the calendar edit modal
         * @exercise - The current exercise that was selected
         * @day - The day the exercise falls on. Is this param necessary?
         */
        vm.openCalendarEditModal = function(exercise,day) { 
            var modalInstance = $uibModal.open({
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
            modalInstance.result.then(function() {
                vm.loadExercisesForWeek(dateService.getWeek());
            });
        };
        
        /*
         * Deletes the exercise from the database. 
         */
        vm.deleteExercise = function(exercise,day) {
            vm.exerciseList.$remove(vm.exerciseList.$getRecord(exercise.$id));    
        };
        
    }    
})();
