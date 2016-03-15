(function() {
    'use strict';
    
    angular
        .module('swoleciety.calendar')
        .controller('CalendarController',CalendarController);
    
    
    function CalendarController() {
        var vm = this; 
        vm.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }
    
})();