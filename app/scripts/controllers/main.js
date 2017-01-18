'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('MainCtrl', function ($q, $http, LOCALHOST, RACES, racesService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	racesService.getNextTwoMonthsRacesData()
            .then(function(data) {

           console.log(data.length);
    });

	

            
  

    
  });
