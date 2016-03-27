(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('swoleciety', [
            'ngRoute',
            'ngResource',
            'swoleciety.browse',
            'swoleciety.calendar',
            'swoleciety.login',
            'swoleciety.core',
            'swoleciety.signup',
            'firebase',
            'ui.bootstrap'
        ])
        .config(configFunction)
        .run(function() {
        console.log('main');
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
            .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
            })
            .when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'SignupController',
            controllerAs: 'vm'
            })    
          .otherwise( {
            redirectTo: '/browse'
          });
    }
})();

    
  

