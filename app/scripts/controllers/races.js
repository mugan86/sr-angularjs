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
    $scope.value = racesService.getRace()[0];
    
    $scope.name = $scope.value.race_name;


    racesService.getSelectRacePhotosGallery($scope.value.race_code, $scope.value.race_circle_circuit)
      .then(function(data) {
      console.log(data);
      $scope.photos = data;


    }, function(response) {
        // something went wrong
       console.log(response);
    });

    /*console.log(angular.toJson($scope.race[0]));

    console.log($scope.race[0].race_climb);*/

});
