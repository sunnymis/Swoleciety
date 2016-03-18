(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseAuthService', firebaseAuthService)
        
    
    firebaseAuthService.$inject = ['FIREBASE_URL', '$firebaseAuth'];
    
    function firebaseAuthService(FIREBASE_URL, $firebaseAuth) {
        var reference = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(reference);
        var service = {
            reference: reference,
            auth: auth
        }
        return service; 
    }
})();