'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('MainCtrl', function (racesService, trafficService, $http, $q, LOCALHOST , RACES) {
    
    trafficService.getLastTrafficIncidents()
            .then(function(data) {
        console.log(data.length);

    }, function(response) {
        // something went wrong
       console.log(response);
    });

});
