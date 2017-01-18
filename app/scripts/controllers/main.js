'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('MainCtrl', function (racesService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    racesService.getLastTrafficIncidents()
            .then(function(data) {
        console.log(data.length);
        racesService.getNextTwoMonthsRacesData()
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

    

  });
