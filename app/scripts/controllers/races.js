'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:MainCtrl
 * @description
 * # RaceCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('RaceCtrl', function ($scope, racesService) {

    $scope.start = true;
    $scope.race = [];

    var r = [];
    r.push(racesService.getRace()[0]);
    $scope.race = r;
    console.log(r[0].race_name);
    console.log($scope.race[0].race_name);

    /*console.log(angular.toJson($scope.race[0]));

    console.log($scope.race[0].race_climb);*/

});
