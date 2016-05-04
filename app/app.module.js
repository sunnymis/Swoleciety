(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('swoleciety', [
            'ngRoute',
            'ngResource',
            'swoleciety.browse',
            'swoleciety.calendar',
            'swoleciety.core',
            'swoleciety.auth',
            'firebase',
            'ui.bootstrap'
        ])
        .config(configFunction)
        .run(function() {
    });

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/browse', {
            templateUrl: 'browse/browse.html',
            controller: 'BrowseController',
            controllerAs: 'vm'
            })
            .when('/calendar', {
            templateUrl: 'calendar/calendar.html',
            controller: 'CalendarController',
            controllerAs: 'vm'
           })
          .otherwise( {
            redirectTo: '/browse'
          });
    }
})();

    
  

