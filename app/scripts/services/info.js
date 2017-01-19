'use strict';

angular.module('serviraceApp')
  .service('infoService', function infoService(LOCALHOST, INFO, requestService) {
    return {
      getAppStats: function() 
      {

        var url = LOCALHOST + INFO.stats;

        return requestService.GetRequest(url);
      },
      getLastTrafficIncidents: function ()
      {
        var url = LOCALHOST+ 'traffic/get/last_incidents.php?ports=0';
      

        return requestService.GetRequest(url);


      }
    };
});

