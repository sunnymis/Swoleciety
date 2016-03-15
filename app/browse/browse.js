(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .controller('BrowseController',BrowseController);
    
    BrowseController.$inject = ['exerciseService'];
    
    function BrowseController(exerciseService) {
        var vm = this; 
        vm.exercises = exerciseService.exercises;
    }
})();