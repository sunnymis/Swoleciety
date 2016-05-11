(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseUserExerciseService', firebaseUserExerciseService);
    
    firebaseUserExerciseService.$inject = ['FIREBASE_URL','$firebaseArray','firebaseAuthService'];
    
    function firebaseUserExerciseService(FIREBASE_URL,$firebaseArray,firebaseAuthService) {
        
        var userExerciseRef = new Firebase(FIREBASE_URL + '/userExercises'),
            authedUser = firebaseAuthService.getAuth()
        
        var service = {
            getUserExercises: getUserExercises,
            addUserExercise: addUserExercise
            //deleteExercise: deleteExercise
        };
        
        return service; 
        
        ////////////////
        
        /*
         * Returns the starting date of this current week
         *
         */
        function getWeek() {
            var today = new Date(),
                day = today.getDay(),
                date = today.getDate() - day,
                startDate = new Date(today.setDate(date)),
                endDate = new Date(today.setDate(date + 6));
            return startDate.toLocaleDateString().replace(/\//g,'-');
        }
        
        function getUserExercises(user,week) { 
            return userExerciseRef.child(user).child(week);
        }
            
        function addUserExercise(user,exercise,day) {     
            var ref = userExerciseRef.child(user).child(getWeek()),
                exerciseObject = {
                    "name": exercise.name,
                    "day": day
                },
                pushedExercise = ref.push(exerciseObject),
                setRef = ref.child(pushedExercise.key()).child("sets");
            
            setRef.push({
                "reps": 1,
                "weight": 1
            });
        }
        
        
        function deleteExercise(exercise,day) {
            var exerciseRef = userExerciseRef.child(authedUser.uid).child(getWeek());
            exerciseRef.once('value').then(function(snapshot) {
                snapshot.forEach(function(firstChild) {
                    firstChild.forEach(function(secondChild) { 
                        if (secondChild.val().day == day.day) {
                            exerciseRef.child(firstChild.key()).child(secondChild.key()).remove();
                        }
                    });
                });
            });
        }
    }
})();