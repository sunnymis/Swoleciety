/**
 * Created by sunnymistry on 1/12/16.
 */


var swolecietyServices = angular.module('SwolecietyServices',['ngResource']);


swolecietyServices.factory('Exercise',['$resource',
    function($resource) {
        return $resource('exercises/exercises.json');
    }]);