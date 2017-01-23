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

    youtubeServices.getLastNumberVideos(11, 3)
     .then(function(data) {
          console.log(data.length);
          $scope.videos = data;
          $scope.token = data.nextPageToken;

        }, function(response) {
            // something went wrong
           console.log(response);
        });

     $scope.getMorevideos = function()
     {
        youtubeServices.getMoreVideosIfExist($scope.token, 11, 3)
             .then(function(data) {
                  console.log(data.length);
                  var videos_data = data;

                  for (var i = 0; i < videos_data.length; i++)
                  {
                    $scope.videos.push(videos_data[i]);
                  }
                  console.log($scope.videos.length + 'videos in total!!');

                }, function(response) {
                    // something went wrong
                   console.log(response);
                });
     };
  });
