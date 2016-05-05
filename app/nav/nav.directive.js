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
    
    NavbarController.$inject = ['$location','firebaseAuthService','$timeout'];
    
    function NavbarController($location, firebaseAuthService,$timeout) {
        var vm = this; 
        
        vm.isLoggedIn = false; 
        vm.logout = logout; 
        
        function logout() {
            firebaseAuthService.logout; 
            $location.path('/landing');
        }
    }
})();