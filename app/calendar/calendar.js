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
                                  'FIREBASE_URL',
                                  '$uibModal'];
    
    function CalendarController($firebaseArray, 
                                 $firebaseObject, 
                                 firebaseUserExerciseService,
                                 firebaseUserService,
                                 firebaseAuthService,
                                 FIREBASE_URL,
                                 $uibModal) {
        var vm = this; 
        var authedUser = firebaseAuthService.getAuth(); 
        vm.days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        vm.weekDates = [];
        vm.weeklyExercises = {}; 
        angular.forEach(vm.days, function(day) {
            vm.weeklyExercises[day] = [];
        });
        vm.singleDayExercises = {};
        vm.selectedDay = ""; // this is ngmodel for mobile view. eventually move out to a mobile controller
        vm.currentStartOfWeek = "";
        
        
        /**
         * Returns the sunday start date of the current week if no parameters
         * or the given week if passed a sunday start date
         * @today - [optional] Day to begin the week 
         * @returns start date of the week in format MM/dd/yyyy
         */
        vm.getWeek = function(today) {
            var today = today || new Date();
            var day = today.getDay();
            var date = today.getDate() - day;
            var startDate = new Date(today.setDate(date));
            var endDate = new Date(today.setDate(date + 6));
            return startDate.toLocaleDateString().replace(/\//g,'-');
        }
        
        /**
         * Updates the 7 dates for the week. Uses the current week if no parameter is passed
         * Maintains the current starting day you are viewing
         * @start - [optional] Date to begin the 7 days 
         * @returns - Populates an object array containing the day of the week and its date in MM/dd/YYYY form
         */ 
        vm.updateWeekDates = function(newStartDate) {
            var startDate =  newStartDate || new Date(vm.getWeek());
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
            var currentWeek = week || vm.getWeek();
            vm.currentStartOfWeek = new Date(currentWeek);
            if (currentWeek == week) {
                // Reset the lists for each day because we are looking at a new week
                vm.weeklyExercises = {};
                angular.forEach(vm.days, function(day) {
                    vm.weeklyExercises[day] = [];
                });
            }
            
            var exercises = $firebaseArray(firebaseUserExerciseService.getUserExercises(authedUser.uid,currentWeek));
            exercises.$loaded()
            .then(function() {
                angular.forEach(exercises, function(exercise) {
                    angular.forEach(exercise, function(e) {
                        if (e instanceof Object && e != undefined) {
                            vm.weeklyExercises[e.day].push(e);
                        }
                    });    
                });
            });
            
            vm.updateWeekDates(vm.currentStartOfWeek);
        };
        
        /*
         * Loads the previous week
         */
        vm.getPreviousWeek = function() {
            var currentStartOfWeek = vm.currentStartOfWeek;
            var lastWeek = vm.getWeek(new Date(currentStartOfWeek.setDate(currentStartOfWeek.getDate() - 7)));
            vm.loadExercisesForWeek(lastWeek);
        }
        
        /*
         * Loads the next week
         */
        vm.getNextWeek = function() {
            var currentStartOfWeek = vm.currentStartOfWeek;
            var nextWeek = vm.getWeek(new Date(currentStartOfWeek.setDate(currentStartOfWeek.getDate() + 7)));
            vm.loadExercisesForWeek(nextWeek);
        }
        
        /*
         * Opens the calendar edit modal
         * @exercise - The current exercise that was selected
         * @day - The day the exercise falls on. Is this param necessary?
         */
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
        
        /*
         * Deletes the exercise from the database. 
         */
        vm.deleteExercise = function(exercise,day) {
            firebaseUserExerciseService.deleteExercise(exercise,day);
            //need to make this a promise, then reload the page
        };
        
       

    }    
})();

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