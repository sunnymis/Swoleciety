
(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseAuthService', firebaseAuthService);
        
    
    firebaseAuthService.$inject = ['FIREBASE_URL', '$firebaseAuth'];
    
    function firebaseAuthService(FIREBASE_URL, $firebaseAuth) {
        var reference = new Firebase(FIREBASE_URL),
            authObject = $firebaseAuth(reference),
            service = {
            reference: reference,
            authObject: authObject,
            login: login,
            register: register,
            isLoggedIn: isLoggedIn,
            logout: logout
        };
        
        return service; 
        
        ////////////////////
        
        /**
         * Logs a user in
         * @param - user - object containing email and password attributes
         */
        function login(user) {
            authObject.$authWithPassword(user)
                .then(function(authData) { 
                    console.log('Logged In as: ', authData.uid);
                })
                .catch(function(error) {
                    console.error('Authentication Failed: ',error);
                }); 
        }
        
        /**
         * Registers a user
         * @param - user - object containing email and password attributes
         */
        function register() {
            
        }
        
        function isLoggedIn() {
            
        }
        
        function logout() {
            
        }
        
    }
})();