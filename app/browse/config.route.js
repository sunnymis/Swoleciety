(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/browse', {
           templateUrl: 'browse/browse.html',
            controller: 'BrowseController',
            controllerAs: 'vm'
        });
    }
})();