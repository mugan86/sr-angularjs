'use strict';

angular.module('serviraceApp')
  .service('requestService', function requestService($http, $q) {
    return {
      GetRequest: function(url) 
      {

        console.log('Make GET REQUEST(*): ' + url);

        return $http.post(url).then(function(response) {
            if (typeof response.data === 'object') {
              console.log(response.data);
                return response.data;
            } else {
                // invalid response
                return $q.reject(response.data);
            }

            }, function(response) {
                // something went wrong
                return $q.reject(response.data);
            });
      },

      PostRequest: function(url) 
      {

        console.log('Make POST REQUEST(*): ' + url);

        return $http.post(url).then(function(response) {
            if (typeof response.data === 'object') {
              console.log(response.data);
                return response.data;
            } else {
                // invalid response
                return $q.reject(response.data);
            }

            }, function(response) {
                // something went wrong
                return $q.reject(response.data);
            });
      },

    };
  });