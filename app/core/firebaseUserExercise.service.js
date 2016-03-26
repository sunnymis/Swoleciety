(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseUserExerciseService', firebaseUserExerciseService);
    
    firebaseUserExerciseService.$inject = ['FIREBASE_URL'];
    
    function firebaseUserExerciseService(FIREBASE_URL) {
        var usersRef = new Firebase(FIREBASE_URL + '/users');
        var service = {
            getProfile: function(user) {
                return new Firebase(userRef + '/' + user); 
            },
            addExercise: function(user,exercise) {     
                var userRef = new Firebase(usersRef + '/' + user);
                var userExercises = userRef.child('exercises');
                var exerciseObject = {};
                exerciseObject[exercise] = true;
                userExercises.update(exerciseObject);
            }
        }
        return service; 
    }
})();