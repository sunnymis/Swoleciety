(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseUserExerciseService', firebaseUserExerciseService);
    
    firebaseUserExerciseService.$inject = ['FIREBASE_URL'];
    
    function firebaseUserExerciseService(FIREBASE_URL) {
        var userExerciseRef = new Firebase(FIREBASE_URL + '/userExercises');
        var service = {
            getUserExercises: function(user) { 
                return userExerciseRef.child(user);
            },
            addUserExercise: function(user,exercise,day) { 
                var ref = userExerciseRef.child(user).child(exercise);
                var exerciseObject = {};
                exerciseObject["name"] = exercise;
                exerciseObject["day"] = day; 
                ref.update(exerciseObject);
                
                var setRef = ref.child("sets");
                setRef.push({
                    "reps": 1,
                    "weight": 1
                });
            }
        }
        return service; 
    }
})();