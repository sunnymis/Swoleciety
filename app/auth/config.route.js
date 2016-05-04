(function() {
    'use strict';
    
    angular
        .module('swoleciety.auth')
        .config(configFunction);
        
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'auth/register.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: 'auth/login.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        });
    }
})(); 