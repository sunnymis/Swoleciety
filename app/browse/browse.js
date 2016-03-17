(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .controller('BrowseController',BrowseController);
    
    BrowseController.$inject = ['$firebaseArray', 'firebaseExerciseService'];
    
    function BrowseController($firebaseArray, firebaseExerciseService) {
        var vm = this; 
        vm.exercises = [];
        var allExercises = $firebaseArray(firebaseExerciseService.getAll());
        allExercises.$loaded()
            .then(function() {
                angular.forEach(allExercises, function(type) {
                    angular.forEach(type, function(exercise) {
                        if (exercise instanceof Object)
                            vm.exercises.push(exercise.name);
                    });
                });
        });
        
        return vm;
    }
})();