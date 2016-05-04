(function() {
    'use strict';
    
    angular
        .module('swoleciety.landing')
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/landing', {
            templateUrl: 'landing/landing.html'
        });
    }
})();