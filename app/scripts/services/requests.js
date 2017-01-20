'use strict';

angular.module('serviraceApp')
  .service('requestService', function requestService($http, $q, responseService) {
    return {
      GetRequestParams: function(url, params) 
      {

        console.log('Make GET REQUEST(Params): ' + url + ' PArams: ' + angular.toJson(params));

        return $http.get(url, params).then(function(response) {
            return responseService.Response(response);
            }, function(response) {
                // something went wrong
                console.log(response);
                return $q.reject(response.data);
            });
      },

      GetRequest: function(url) 
      {

        console.log('Make GET REQUEST(*): ' + url);

        return $http.get(url).then(function(response) {
            return responseService.Response(response);
            }, function(response) {
                // something went wrong
                console.log(response);
                return $q.reject(response.data);
            });
      },

      PostRequest: function(url, params) 
      {

        console.log('Make POST REQUEST(*): ' + url + '   ' + params);

        return $http.post(url, params).then(function(response) {
            
              return responseService.Response(response);

            }, function(response) {
                // something went wrong
                console.log(response);
                return $q.reject(response.data);
            });
      },
    };
  });