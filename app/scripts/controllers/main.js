'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('MainCtrl', function (racesService, trafficService) {


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

});
