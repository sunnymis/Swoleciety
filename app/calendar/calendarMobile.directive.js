(function() {
    'use strict';
    
    angular
    .module('swoleciety.calendar')
    .directive('calendarMobile', function() {
        return {
            templateUrl: 'calendar/calendarMobile.html',
            controller: 'CalendarController',
            controllerAs: 'vm'
        };
    });
})();