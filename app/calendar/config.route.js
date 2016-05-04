(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider .when('/calendar', {
            templateUrl: 'calendar/calendar.html',
            controller: 'CalendarController',
            controllerAs: 'vm'
        });
    }
})();