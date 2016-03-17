(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .controller('BrowseController',BrowseController);
    
    BrowseController.$inject = ['$firebaseArray', 'firebaseExerciseService'];
    
    function BrowseController($firebaseArray, firebaseExerciseService) {
        var vm = this; 
        vm.exercises = [];
        
        firebaseExerciseService.getAll().on('value', function(snapshot) {
            snapshot.forEach(function(type) {
                type.forEach(function(exercise) {
                    console.log(exercise.val().name);
                    vm.exercises.push(exercise.val().name);    
                });
            }); 
        });
        return vm;
    }
})();