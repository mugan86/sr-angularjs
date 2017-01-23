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
    
    $scope.openRaceInfo = function(id)
    {
    	window.alert(id);
    };

    youtubeServices.getLastNumberVideos(12, 3)
     .then(function(data) {
          console.log(data.items.length);
          $scope.videos = data;
          $scope.token = data.nextPageToken;
          $scope.items = data.items;

        }, function(response) {
            // something went wrong
           console.log(response);
        });

     $scope.getMorevideos = function()
     {
        if($scope.token !== -1)
        {
          youtubeServices.getMoreVideosIfExist($scope.token, 12, 3)
             .then(function(data) {
                  console.log(data.items.length);
                  var videos_data = data;
                  var items_video = data.items;
                  if (data.nextPageToken !== null && data.nextPageToken !== undefined)
                  {
                    $scope.token = data.nextPageToken;
                    console.log($scope.token);
                  }
                  else
                  {
                    $scope.token = -1;
                  }
                  

                  for (var i = 0; i < items_video.length; i++)
                  {
                    console.log(items_video[i]);
                    $scope.items.push(items_video[i]);
                  }
                  
                  console.log('videos: ' + $scope.items.length);

                }, function(response) {
                    // something went wrong
                   console.log(response);
                });
        } 
        else
        {
          window.alert('Ez daude item gehiago!!');
        }
        
     };
  });
