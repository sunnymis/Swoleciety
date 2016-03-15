(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('exerciseService', exerciseService);
    
    exerciseService.$inject = ['$firebaseArray', 'firebaseDataService'];
    
    function exerciseService($firebaseArray, firebaseDataService) {
        
        var service = {
            exercises:  $firebaseArray(firebaseDataService.exercises)
        };
        
        return service;
        
        
        
    }
})();