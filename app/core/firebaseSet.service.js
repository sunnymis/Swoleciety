(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseSetService', firebaseSetService);
    
    firebaseSetService.$inject = ['FIREBASE_URL','$firebaseArray','firebaseAuthService'];
    
    function firebaseSetService(FIREBASE_URL,$firebaseArray,firebaseAuthService) {
        
        var ref = new Firebase(FIREBASE_URL + '/userExercises'),
            authedUser = firebaseAuthService.getAuth(),
            service = {
                getSets: getSets
            };
            return service;     
        
        ////////////////
        
        function getSets(exercise) {
            var retVal = null; 
            var exRef = ref.child(authedUser.uid).child(getWeek()).child(exercise.name);
            exRef.once("value",function(snapshot) {
                snapshot.forEach(function(ex) {
                    if (ex.val().day == exercise.day) {
                        retVal = exRef.child(ex.key()).child('sets'); 
                    }
                })
            })
            return $firebaseArray(retVal);
        }

        function getWeek() {
            var today = new Date(),
                day = today.getDay(),
                date = today.getDate() - day,
                startDate = new Date(today.setDate(date)),
                endDate = new Date(today.setDate(date + 6));
            return startDate.toLocaleDateString().replace(/\//g,'-');
        }
    }
})();