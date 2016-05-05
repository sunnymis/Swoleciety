(function() {
  'use strict';

  angular
    .module('swoleciety.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$location'];

  function AuthController($location) {
    var vm = this;

    vm.error = null;


    vm.login = login;

    function login(user) {
     console.log('here');
    }
  }

})();

/*(function() {
    'use strict';
    
    angular
        .module('swoleciety.auth')
        .controller('AuthController',AuthController);
    
    AuthController.$inject = ['firebaseAuthService', '$location'];
    
    function AuthController(firebaseAuthService, $location) {
        var vm = this;
        vm.error = null; 
        
        function login(user) {
            console.log('here');
            /*
            return firebaseAuthService.login(user)
                .then(function() {
                console.log('her2e');
                    $location.path('/browse');
            })
            .catch(function(error) {
                vm.error = error;
            });
            *
        }
        
    }
})();*/

