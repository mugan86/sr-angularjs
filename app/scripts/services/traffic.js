'use strict';

angular.module('serviraceApp')
  .service('trafficService', function trafficService(LOCALHOST, requestService) {
    return {
      getPortsSituation: function() 
      {

        var url = LOCALHOST+ 'traffic/get/last_incidents.php?ports=1';

        return requestService.GetRequest(url);
      },
      getLastTrafficIncidents: function ()
      {
        var url = LOCALHOST+ 'traffic/get/last_incidents.php?ports=0';
      

        return requestService.GetRequest(url);


      }
    };
});