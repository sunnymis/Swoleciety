
(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('dateService', dateService);
        
    
    function dateService() {
        var service = {
            getWeek: getWeek
        };
        
        return service; 
        
        ///////////////
        
        /**
         * Returns the sunday start date of the current week if no parameters
         * or the given week if passed a sunday start date
         * @today - [optional] Day to begin the week 
         * @returns start date of the week in format MM/dd/yyyy
         */
        function getWeek(today) {
            var today = today || new Date(),
                day = today.getDay(),
                date = today.getDate() - day,
                startDate = new Date(today.setDate(date)),
                endDate = new Date(today.setDate(date + 6));
            return startDate.toLocaleDateString().replace(/\//g,'-');
        }
    }
        
})(); 