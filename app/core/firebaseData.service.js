(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseDataService', firebaseDataService)
        .run(function() {
            console.log('firebase') ;
    });

    firebaseDataService.$inject = ['FIREBASE_URL'];
    
    function firebaseDataService(FIREBASE_URL) {
        var root = new Firebase(FIREBASE_URL);
        debugger;
        var service = {
            root: root,
            exercises: root.child('exercises'),
            programs: root.child('programs'),
            users: root.child('users')
        };
        return service;
    }
})();