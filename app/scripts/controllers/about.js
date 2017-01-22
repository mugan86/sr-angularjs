'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.openRaceInfo = function(id)
    {
    	window.alert(id);
    };
  });
