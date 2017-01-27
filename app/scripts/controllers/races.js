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

    $scope.race = racesService.getRace();

    console.log(angular.toJson($scope.race[0]));

});
