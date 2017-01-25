'use strict';

angular.module('serviraceApp')
  .service('trafficService', function trafficService(LOCALHOST, requestService) {
    return {
      getPortsSituation: function() 
      {


        var data = { ports: 1};

        var config = {
         params: data
        };
        var url = LOCALHOST.v1+ 'traffic/get/last_incidents.php';
      

        return requestService.GetRequestParams(url, config);
      },
      getLastTrafficIncidents: function ()
      {

        var data = { ports: 0};

        var config = {
         params: data
        };
        var url = LOCALHOST.v1+ 'traffic/get/last_incidents.php';
      

        return requestService.GetRequestParams(url, config);


      }
    };
});