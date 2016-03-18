(function() {
    'use strict';
    
    angular
        .module('swoleciety.login')
        .controller('LoginController', LoginController); 

    LoginController.$inject = ['firebaseAuthService'];
    function LoginController(firebaseAuthService) {
        var vm = this; 
        
        vm.newUser = {
            email: '',
            password: ''
        };
        
        vm.register = register;
        
        function register(newUser) {
          return firebaseAuthService.auth.$createUser(newUser)
            .then(function(registeredUser) {
              console.log('Registered ' + registeredUser + ' uid: ' + registeredUser.uid);
          })
            .catch(function(error) {
              console.log(error);
          })
        };
    }
})();