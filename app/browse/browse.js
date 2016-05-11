(function() {
    'use strict';
    
    angular
        .module('swoleciety.browse')
        .controller('BrowseController',BrowseController);
    
    BrowseController.$inject = ['$firebaseArray', 
                                'firebaseExerciseService', 
                                'firebaseUserService', 
                                'firebaseUserExerciseService',
                                'firebaseAuthService',
                                '$uibModal',
                                'FIREBASE_URL'];
    
    function BrowseController($firebaseArray, 
                               firebaseExerciseService, 
                               firebaseUserService, 
                               firebaseUserExerciseService,
                               firebaseAuthService,
                               $uibModal,
                               FIREBASE_URL) {
        var vm = this; 
        var authedUser = firebaseAuthService.getAuth(); 
        vm.exercises = [];
        var allExercises = $firebaseArray(firebaseExerciseService.getAll());
        allExercises.$loaded()
        .then(function() {
            angular.forEach(allExercises, function(type) {
                angular.forEach(type, function(exercise) {
                    if (exercise instanceof Object) {
                        vm.exercises.push(exercise);
                    }
                });
            });
        });
        
        vm.addToWeekday = function(exercise, day) {
            // Possibly inject a user service, get current user
            var exerciseRef = new Firebase(FIREBASE_URL).child('users').child(authedUser.uid).child('exercises');
            firebaseUserService.addExercise(authedUser.uid,exercise);
            firebaseUserExerciseService.addUserExercise(authedUser.uid,exercise,day);
        }
        
        
        vm.openExerciseDetailsModal = function(exercise) { 
            $uibModal.open({
                animation: true,
                templateUrl: 'browse/browseExerciseDetailsModal.html',
                controller: 'BrowseExerciseDetailsModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    exerciseDetails: function() {
                        return exercise; 
                    }
                } 
            });
        }
        
        return vm;
    }
})();