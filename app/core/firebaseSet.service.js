(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseSetService', firebaseSetService);
    
    firebaseSetService.$inject = ['FIREBASE_URL'];
    
    function firebaseSetService(FIREBASE_URL) {
         var getWeek = function() {
            var today = new Date();
            var day = today.getDay();
            var date = today.getDate() - day;
            var startDate = new Date(today.setDate(date));
            var endDate = new Date(today.setDate(date + 6));
            return startDate.toLocaleDateString().replace(/\//g,'-');
        };
       var retVal = null; 
       var ref = new Firebase(FIREBASE_URL + '/userExercises/smistry'); 
        var setRef  = ref.child(getWeek()).child(exercise.name);
        setRef.once('value').then(function(snapshot) {
            snapshot.forEach(function(snapChild) {
                if (snapChild.val().day == exercise.day) {
                    var ref = setRef.child(snapChild.key()).child('sets');
                    var reff = ref.toString();
                    retVal = ref;
                }                        
            });
        });
        return $firebaseArray(retVal); 
    }
})();