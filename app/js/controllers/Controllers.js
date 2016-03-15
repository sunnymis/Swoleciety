/**
 * Created by sunnymistry on 1/11/16.
 */
"use strict";

var swolecietyControllers = angular.module('SwolecietyControllers', []);


swolecietyControllers.controller('MainController', ['$scope', '$firebaseObject',
    function ($scope, $firebaseObject) {
        var exerciseRef = new Firebase('https://swoleciety.firebaseio.com/exercises');
        $scope.exercises = {};
        
        exerciseRef.once("value",function(categorySnapshot) {
            categorySnapshot.forEach(function(exerciseSnapshot) {
                
            });
        });
        
    }
    ]);


swolecietyControllers.controller('CalendarController', ['$scope',
    function ($scope) {
        $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        
        $scope.handleDragStart = function(ev) {
            this.style.opacity = '0.4';
            ev.dataTransfer.setData("text", ev.target.id);                                           
        };
        $scope.handleDragOver = function(ev) {
            ev.preventDefault();
            ev.dataTransfer.dropEffect = 'move';
        };
        $scope.handleDragEnter = function(ev) {
            this.classList.add('over');
        };
        $scope.handleDragLeave = function(ev) {
            this.classList.remove('over');
        };
        
        $scope.exercise = document.getElementById('exercise1');
        $scope.weekday = document.getElementById('weekday');
        
        $scope.exercise.addEventListener('dragstart', $scope.handleDragStart, false);
        
        var days = document.querySelectorAll('#weekday');
        [].forEach.call(days, function(day) {
            day.addEventListener('dragover', $scope.handleDragOver, false);
            day.addEventListener('dragenter', $scope.handleDragEnter, false);
            day.addEventListener('dragleave', $scope.handleDragLeave, false);
        });
        
   }
]);

swolecietyControllers.controller('LogInController',['$scope',function($scope) {
    $scope.pass = "";
}]);

/*
        $scope.weekday.addEventListener('dragover', $scope.handleDragOver, false);
        $scope.weekday.addEventListener('dragenter', $scope.handleDragEnter, false);
        $scope.weekday.addEventListener('dragleave', $scope.handleDragLeave, false);
        */