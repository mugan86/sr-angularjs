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

    $scope.raceLocation = function()
    {
      var mainMarker = {
                  lat: parseFloat($scope.value.race_lat),
                  lng: parseFloat($scope.value.race_lng),
                  focus: true,
                  message: $scope.value.race_name + " (" + $scope.value.race_town,
                  draggable: true
      };

      angular.extend($scope, {
          london: {
              lat: parseFloat($scope.value.race_lat),
              lng: parseFloat($scope.value.race_lng),
              zoom: 8
          },
          markers: {
              mainMarker: angular.copy(mainMarker)
          },
          position: {
              lat: parseFloat($scope.value.race_lat),
              lng: parseFloat($scope.value.race_lng)
          },
          events: { // or just {} //all events
              markers:{
                enable: [ 'dragend' ]
                //logic: 'emit'
              }
          }
      });
    };
    $scope.$on("leafletDirectiveMarker.dragend", function(event, args){
        $scope.position.lat = args.model.lat;
        $scope.position.lng = args.model.lng;
    });

    $scope.start = true;
    $scope.race = [];

    var r = [];
    r.push(racesService.getRace()[0]);
    $scope.value = racesService.getRace()[0];
    
    $scope.name = $scope.value.race_name;

    $scope.raceLocation ();

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
