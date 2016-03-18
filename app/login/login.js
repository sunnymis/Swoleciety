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
              vm.response = 'Successfully created user account with uid: ' +  userData.uid;
          })
            .catch(function(error) {
              switch(error.code) {
                  case "EMAIL_TAKEN":
                    vm.response = 'The new user account cannot be created because the email is already in use.';
                    break;
                  case "INVALID_EMAIL":
                    vm.response = 'The specified email is not a valid email.';
                    break;
                  default:
                    vm.response = 'Error creating user: ' + error;
              }
          })
        };
    }
})();