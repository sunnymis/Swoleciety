(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseUserService', firebaseUserService);
    
    firebaseUserService.$inject = ['FIREBASE_URL'];
    
    function firebaseUserService(FIREBASE_URL) {
        var usersRef = new Firebase(FIREBASE_URL + '/users');
        var service = {
            getProfile: function(user) {
                return usersRef.child(user); 
            },
            addExercise: function(user,exercise) {     
                var userRef = usersRef.child(user);
                var userExercises = userRef.child('exercises');
                var exerciseObject = {};
                exerciseObject[exercise] = true;
                userExercises.update(exerciseObject);
            },
            removeExercise: function(user,exercise) {
                
            }
        }
        return service; 
    }
})();