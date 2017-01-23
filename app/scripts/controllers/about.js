'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('AboutCtrl', function ($scope, youtubeServices) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.openRaceInfo = function(id)
    {
    	window.alert(id);
    };

    youtubeServices.getLastNumberVideos(11, 1)
     .then(function(data) {
          console.log(data.length);
          $scope.videos = data;

        }, function(response) {
            // something went wrong
           console.log(response);
        });
  });
