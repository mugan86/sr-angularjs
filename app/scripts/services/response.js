'use strict';

angular.module('serviraceApp')
.service('responseService', function responseService($q) {
    return {
      Response: function(response) 
      {

        if (typeof response.data === 'object') {
              console.log(response);
              console.log(response.data);
                return response.data;
        } else {
            // invalid response
            return $q.reject(response.data);
        }
      },
    };
  });