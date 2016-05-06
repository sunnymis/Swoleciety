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
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/landing'
        });
    }
    
})();

    
  

