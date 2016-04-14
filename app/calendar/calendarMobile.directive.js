/*
    Currently not using. Weird bug that when I add directive
    to the main html file, most of the week content goes away

*/

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