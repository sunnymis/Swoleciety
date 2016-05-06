(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseUserService', firebaseUserService);
    
    firebaseUserService.$inject = ['FIREBASE_URL'];
    
    function firebaseUserService(FIREBASE_URL) {
        var usersRef = new Firebase(FIREBASE_URL + '/users'),
            service = {
                getProfile: getProfile,
                addExercise: addExercise,
                removeExercise: removeExercise
            };
        
        return service; 
        
        ///////////////////
        
        function getProfile(user) {
            return usersRef.child(user); 
        }
        
        function addExercise(user, exercise) {
            var userRef = usersRef.child(user),
                userExercises = userRef.child('exercises'),
                exerciseObject = {};
            exerciseObject[exercise.name] = true;
            userExercises.update(exerciseObject);
        }
        
        function removeExercise(user,exercise) {
            var userRef = usersRef.child(user),
                exerciseRef = userRef.child(exercise);
        }
    }
})();