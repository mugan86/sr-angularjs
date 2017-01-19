'use strict';

angular.module('serviraceApp')
  .service('racesService', function racesService(LOCALHOST, RACES, requestService) {
    return {
      getNextTwoMonthsRacesData: function() 
      {

        var url = LOCALHOST + RACES.afterBefore;

        return requestService.PostRequest(url);
      },
      getLastTrafficIncidents: function ()
      {
        var url = LOCALHOST+ 'traffic/get/last_incidents.php?ports=0';
      

        return requestService.GetRequest(url);


      }
    };
});

