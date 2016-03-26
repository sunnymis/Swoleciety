(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .controller('BrowseController',BrowseController);
    
    BrowseController.$inject = ['$firebaseArray', 
                                'firebaseExerciseService', 
                                'firebaseUserService', 
                                'firebaseUserExerciseService',
                                'FIREBASE_URL'];
    
    function BrowseController($firebaseArray, 
                               firebaseExerciseService, 
                               firebaseUserService, 
                               firebaseUserExerciseService,
                               FIREBASE_URL) {
        var vm = this; 
        vm.exercises = [];
        var allExercises = $firebaseArray(firebaseExerciseService.getAll());
        allExercises.$loaded()
        .then(function() {
            angular.forEach(allExercises, function(type) {
                angular.forEach(type, function(exercise) {
                    if (exercise instanceof Object) {
                        vm.exercises.push(exercise.name);
                    }
                });
            });
        });
        
        vm.addToWeekday = function(exercise, day) {
            // Possibly inject a user service, get current user
            var exerciseRef = new Firebase(FIREBASE_URL).child('users').child('smistry').child('exercises');
            firebaseUserService.addExercise('smistry',exercise);
            firebaseUserExerciseService.addUserExercise('smistry',exercise,day);
            
            
            //var exercisesForDay = $firebaseArray(exerciseRef.child(day));
            
//            var i = ref.push(); 
//            console.log($firebaseArray(i));
//            ref.child(day).once('value', function(snapshot) {
//                if (snapshot.val() !== null) {
//                    // The day exists under exercises in json tree
//                    exercisesForDay.$add({
//                       "exercise": exercise,
//                       "sets": {
//                           "reps": 1,
//                           "weight": 10
//                       }
//                   });
//                }
//               else {
//                   console.log(day + ' doesnt exist');
//                   // day doesnt exist, use set/update to make day value true
//                   var dayRef = ref.child(day);
//                   dayRef.push({
//                       "exercise": exercise
//                   }).push({
//                       "sets": {
//                           "reps": 1,
//                           "weight": 10
//                       }
//                   });
//                   
//               }
//            });
            
            
        }
        
        return vm;
    }
})();