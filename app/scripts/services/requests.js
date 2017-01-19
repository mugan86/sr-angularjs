'use strict';

angular.module('serviraceApp')
  .service('requestService', function requestService($http, $q, responseService) {
    return {
      GetRequest: function(url) 
      {

        console.log('Make GET REQUEST(*): ' + url);

        return $http.post(url).then(function(response) {
            return responseService.Response(response);
            }, function(response) {
                // something went wrong
                return $q.reject(response.data);
            });
      },

      PostRequest: function(url) 
      {

        console.log('Make POST REQUEST(*): ' + url);

        return $http.post(url).then(function(response) {
            
              return responseService.Response(response);

            }, function(response) {
                // something went wrong
                return $q.reject(response.data);
            });
      },
    };
  });