(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .controller('BrowseController',BrowseController);
    
    BrowseController.$inject = ['$firebaseArray', 'firebaseExerciseService'];
    
    function BrowseController($firebaseArray, firebaseExerciseService) {
        var vm = this; 
        vm.exercises = $firebaseArray(firebaseExerciseService.getByType('arms'));
    }
})();