(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .controller('BrowseExerciseDetailsModalController',BrowseExerciseDetailsModalController);
    
    BrowseExerciseDetailsModalController.$inject = ['$uibModalInstance','exerciseDetails'];
    
    function BrowseExerciseDetailsModalController($uibModalInstance, exerciseDetails) {
        var vm = this; 
               
        vm.exercise = exerciseDetails;
        
        
        vm.ok = function() { 
            $uibModalInstance.close();
        }
        vm.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();