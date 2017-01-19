'use strict';

angular.module('serviraceApp')
  .service('racesService', function racesService(LOCALHOST, RACES, requestService) {
    return {
      getNextTwoMonthsRacesData: function(params) 
      {
          
        var url = LOCALHOST + RACES.afterBefore;

        return requestService.PostRequest(url, params);
      },
      getLastTrafficIncidents: function ()
      {
        var url = LOCALHOST+ 'traffic/get/last_incidents.php?ports=0';
      

        return requestService.GetRequest(url);


      },
      /*getSelectRacesPhotos: function (params)
      {
        //http://mugan86.com/serviraces/api/v1/
        return $http.post(LOCALHOST + "race/get/race_photos.php", params).success(

            function(data) {

              console.log("CONFIG.JS 76 (Register DEVICE!!)");
              return data;
            }
        );
        //return request.PostRequest(url);
      }*/
    };
});

