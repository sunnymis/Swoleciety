(function() {
  'use strict';

  angular
    .module('swoleciety.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$location', 'firebaseAuthService','firebaseUserService'];

  function AuthController($location, firebaseAuthService, firebaseUserService) {
    var vm = this;

    vm.error = null;

    vm.login = login;
    vm.register = register; 

    function login(user) {
        firebaseAuthService.login(user);
        $location.path('/browse');
    }
      
    function register(user) {
        firebaseAuthService.register(user);
    }
  }

})();

