(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseExerciseService', firebaseExerciseService);
    
    firebaseExerciseService.$inject = ['FIREBASE_URL'];
    
    function firebaseExerciseService(FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL).child('exercises');
        var service = {
            getByType: function(type) {
                return ref.child(type);
            },
            getAll: function() {
                return ref; 
            },
            addForUser: function(exercise, user) {       
            }
        }
        return service; 
    }
})(); 