'use strict';

angular.module('serviraceApp')
  .service('racesService', function racesService($q, $http, LOCALHOST, RACES) {
    return {
      getNextTwoMonthsRacesData: function() 
      {

        var url = LOCALHOST + RACES.afterBefore;

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
      getLastTrafficIncidents: function ()
      {
        var url = LOCALHOST+ 'traffic/get/last_incidents.php?ports=0';
        

        return $http.get(url).success(

            function(resp){

                return resp.data;
            }
        );
      }
    };
  });