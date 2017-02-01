'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('MainCtrl', function (racesService, trafficService, $scope, $location) {

   //Carousel data

   $scope.myInterval = 2000;

    trafficService.getLastTrafficIncidents()
            .then(function(data) {
        	console.log(data.length);


        racesService.getSelectChampionshipRaces('goierri_trail_2017')
            .then(function(data) {
	        console.log(data.length);


	        racesService.getSelectRaceNearServices('aloñako_igoera', 'restaurant', '10', '1')
	        	.then(function(data) {
	        	console.log(data.length);

		    }, function(response) {
		        // something went wrong
		       console.log(response);
		    });

	    }, function(response) {
	        // something went wrong
	       console.log(response);
	    });

    }, function(response) {
        // something went wrong
       console.log(response);
    });

  	racesService.getActiveChampionships()
	        	.then(function(data) {
    	console.log(data.length);

    }, function(response) {
        // something went wrong
       console.log(response);
    });

	racesService.getLastEvents('race', 17)
	        	.then(function(data) {
    	console.log(data.length);

    }, function(response) {
        // something went wrong
       console.log(response);
    });
            //first_data, second_data, race_name, race_type, district, distance

  racesService.getNextTwoMonthsRacesData('', '', 'Apuko', 'all', 'Euskal Herria', '15')
  //racesService.getNextRaces()
      .then(function(data) {
      $scope.raceData = data;
      console.log('races!!!' + data.length);
    }, function(response) {
        // something went wrong
       console.log(response);
    });


  $scope.showMessage = function(pos)
  {
    window.alert(pos);
  };

  $scope.showSelectData = function (race)
  {
     console.log(race.race_name);
     console.log(angular.toJson(race));

     window.localStorage.setItem("select_race", angular.toJson(race));

     racesService.addRace(race);

     $location.path('/race');
     /*window.localStorage.getItem("select_race")*/
  };




});
