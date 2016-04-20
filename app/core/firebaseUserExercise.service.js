(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseUserExerciseService', firebaseUserExerciseService);
    
    firebaseUserExerciseService.$inject = ['FIREBASE_URL'];
    
    function firebaseUserExerciseService(FIREBASE_URL) {
        var userExerciseRef = new Firebase(FIREBASE_URL + '/userExercises');
        var getWeek = function() {
            var today = new Date();
            var day = today.getDay();
            var date = today.getDate() - day;
            var startDate = new Date(today.setDate(date));
            var endDate = new Date(today.setDate(date + 6));
            return startDate.toLocaleDateString().replace(/\//g,'-');
        };
        
        var service = {
            getUserExercises: function(user,week) { 
                return userExerciseRef.child(user).child(week);
            },
            addUserExercise: function(user,exercise,day) { 
                
                var ref = userExerciseRef.child(user).child(getWeek()).child(exercise.name);
                var exerciseObject = {
                    "name": exercise.name,
                    "day": day
                };
                var pushedExercise = ref.push(exerciseObject);
                
                var setRef = ref.child(pushedExercise.key()).child("sets");
                setRef.push({
                    "reps": 1,
                    "weight": 1
                });
                
            },
            deleteExercise: function(exercise) {
                var exerciseRef = userExerciseRef.child('smistry').child(getWeek()).child(exercise);
                exerciseRef.remove(); 
            },
            
            addSet: function(exercise){
                var setRef = userExerciseRef.child('smistry').child(getWeek()).child(exercise).child("sets");
                setRef.push({
                    "reps": 1,
                    "weight": 1
                });
            },
            removeSet: function(exercise,key) {
                var setRef = userExerciseRef.child('smistry').child(getWeek()).child(exercise).child("sets").child(key);
                setRef.remove();
            }
            
        }
        return service; 
    }
})();