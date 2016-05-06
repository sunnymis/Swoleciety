(function() {
    'use strict';
    
    angular
        .module('swoleciety.stats')
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/stats', {
           templateUrl: 'stats/stats.html'
        });
    }
})();