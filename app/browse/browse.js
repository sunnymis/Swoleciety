(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .controller('BrowseController',BrowseController);
    
    BrowseController.$inject = ['$firebaseArray', 'firebaseExerciseService','FIREBASE_URL'];
    
    function BrowseController($firebaseArray, firebaseExerciseService, FIREBASE_URL) {
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
            var ref = new Firebase(FIREBASE_URL).child('users').child('smistry').child('exercises');
            ref.child(day).once('value', function(snapshot) {
                if (snapshot.val() !== null) {
                    // The day exists under exercises in json tree
                    console.log(day + ' exists');
                }
               else {
                   // day doesnt exist, use set/update to make day value true 
                   console.log(day + ' doesnt exist');
               }
            });
            
        }
        
        return vm;
    }
})();