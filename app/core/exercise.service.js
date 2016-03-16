(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('exerciseService', exerciseService);
    
    exerciseService.$inject = ['$firebaseArray', 'firebaseDataService'];
    
    function exerciseService($firebaseArray, firebaseDataService) {

        var service = {
            exercise:  Exercise
        };
        
        function Exercise() {
            var ref = firebaseDataService.exercises;
            ref.on("value", function (snapshot) {
                console.log(snapshot.val());
            });
        }
        
        
        return service;
        
    }
})();