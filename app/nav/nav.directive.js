(function() {
    'use strict';
    
    angular
        .module('swoleciety.nav')
        .directive('navBar',navBar)
        .controller('NavbarController',NavbarController);
    
    function navBar() {
        return {
            templateUrl: 'nav/nav.html',
            restrict: 'E',
            controller: 'NavbarController',
            controllerAs: 'vm',
            scope: {}
        };
    }
    
    NavbarController.$inject = ['$location','firebaseAuthService'];
    
    function NavbarController($location, firebaseAuthService,$timeout) {
        var vm = this; 
        
        vm.isLoggedIn = firebaseAuthService.isLoggedIn; 
        vm.logout = logout; 
        
        function logout() {
            console.log('here in directive');
            firebaseAuthService.logout(); 
            $location.path('/landing');
        }

    }
})();