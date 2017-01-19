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
                console.log(response);
                return $q.reject(response.data);
            });
      },

      PostRequest: function(req) 
      {

        console.log('Make POST REQUEST(*): ' + req);

        return $http.post(req).then(function(response) {
            
              return responseService.Response(response);

            }, function(response) {
                // something went wrong
                console.log(response);
                return $q.reject(response.data);
            });
      },
    };
  });