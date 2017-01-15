(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('swoleciety', [
            'ngRoute',
            'ngResource',
            'swoleciety.nav',
            'swoleciety.browse',
            'swoleciety.calendar',
            'swoleciety.core',
            'swoleciety.auth',
            'swoleciety.landing',
            'swoleciety.stats',
            'firebase',
            'ui.bootstrap'
        ])
        .config(configFunction)
        .run(runFunction);
    
    configFunction.$inject = ['$routeProvider'];
    runFunction.$inject = ['$rootScope'];

    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/landing'
        });
    }
    
    function runFunction($rootScope) {
        console.log($rootScope.user);
        //TODO: figure out how to check if user is loggedin. if so route to browse otherwise route to landing 
        
    }
    
})();

    
  

