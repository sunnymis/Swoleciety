(function() {
    'use strict';
    
    angular
        .module('swoleciety.core')
        .factory('firebaseUserExerciseService', firebaseUserExerciseService);
    
    firebaseUserExerciseService.$inject = ['FIREBASE_URL','$firebaseArray'];
    
    function firebaseUserExerciseService(FIREBASE_URL,$firebaseArray) {
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
            deleteExercise: function(exercise,day) {
                var exerciseRef = userExerciseRef.child('smistry').child(getWeek());
                exerciseRef.once('value').then(function(snapshot) {
                    
                    snapshot.forEach(function(firstChild) {
                        firstChild.forEach(function(secondChild) { 
                            if (secondChild.val().day == day.day) {
                                exerciseRef.child(firstChild.key()).child(secondChild.key()).remove();
                            }
                        });
                    });
                });
            },
            
            addSet: function(exercise,key){
                var setRef = userExerciseRef.child('smistry').child(getWeek()).child(exercise.name);
                setRef.once('value').then(function(snapshot) {
                    snapshot.forEach(function(snapChild) {
                        if (snapChild.val().day == exercise.day) {
                            setRef.child(snapChild.key()).child('sets').push({
                                "reps": 1,
                                "weight": 1
                            });
                        }                        
                    });
                });
            },
            removeSet: function(exercise,key) {
                var setRef = userExerciseRef.child('smistry').child(getWeek()).child(exercise.name);
                setRef.remove();
            },
            saveSet: function(exercise,set,key) {
                var setRef = userExerciseRef.child('smistry').child(getWeek()).child(exercise.name);
                setRef.once('value').then(function(snapshot) {
                    snapshot.forEach(function(snapChild) {
                        snapChild.child('sets').forEach(function(aSet) {
                           if(aSet.key() == key) {
                               setRef.child(snapChild.key()).child('sets').child(key).update({
                                    "reps": set.reps, 
                                    "weight": set.weight
                               });;
                           }
                        });
                    });
                });
            },
            getSets: function(exercise) {
                var setRef = userExerciseRef.child('smistry').child(getWeek()).child(exercise.name);
                setRef.once('value').then(function(snapshot) {
                    snapshot.forEach(function(snapChild) {
                        if (snapChild.val().day == exercise.day) {
                            snapChildVar = snapChild.key(); 
                            //console.log($firebaseArray(setRef.child(snapChild.key()).child('sets')));
                        }                        
                    });
                });
                console.log(snapChildVar);
            }            
        }
        return service; 
    }
})();