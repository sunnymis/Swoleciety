(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .controller('BrowseController',BrowseController)
        .run(function() {
            console.log('browsejs');
        });
    
    BrowseController.$inject = ['Exercise'];
    
    function BrowseController(Exercise) {
        var vm = this; 
        vm.exercises = Exercise.query();
    }
})();