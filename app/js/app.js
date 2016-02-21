'use strict';

// Declare app level module which depends on views, and components
angular.module('SwolecietyApp', [
    'ngRoute',
    'SwolecietyControllers',
    'SwolecietyServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/exercises', {
        templateUrl: 'partials/exercises-list.html',
        controller: 'MainController'
        }).
        when('/calendar', {
        templateUrl: 'partials/calendar.html',
        controller: 'CalendarController'
       })
      .otherwise( {
        redirectTo: '/exercises'
      });
}]);

