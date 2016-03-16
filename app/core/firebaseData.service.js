(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseDataService', firebaseDataService)
        .factory('users',Users);
    

    firebaseDataService.$inject = ['FIREBASE_URL'];
    Users.$inject = ['$firebaseObject','$firebaseArray', 'FIREBASE_URL'];
    
    function firebaseDataService(FIREBASE_URL) {
        var rootRef = new Firebase(FIREBASE_URL);
        var service = {
            root: rootRef,
            exercises: rootRef.child('exercises'),
            programs: rootRef.child('programs'),
            users: Users
        }; 
        console.log(service);
        return service;
    }
    
    function Users($firebaseObject, $firebaseArray, FIREBASE_URL) {
        console.log(FIREBASE_URL);
        var userRef = new Firebase(FIREBASE_URL).child('users'); 
        this.get = function(uid) {
            return $firebaseObject(userRef.child(uid));
        };
        this.all = function() {
            return $firebaseArray(userRef);
        };
    }    
})();