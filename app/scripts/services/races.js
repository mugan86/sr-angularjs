'use strict';

angular.module('serviraceApp')
  .service('racesService', function racesService(LOCALHOST, RACES, requestService) {
    return {
      getNextTwoMonthsRacesData: function(params) 
      {
          
        var url = LOCALHOST + RACES.afterBefore;

        return requestService.PostRequest(url, params);
      },
      getSelectRaceNearServices: function (code, category, distance, circle)
      {
        var url = 'http://mugan86.com/serviraces/api/v1/race/get/test_post.php';
      
        return requestService.PostRequest(url, {race_name: code, category_filt: category, service_distance: distance, circle_circuit: circle});


      },
      getActiveChampionships: function ()
      {
        var url = 'http://192.168.1.4/api-servirace/api/v2/race/get/championship.php';

        return requestService.GetRequest(url);
      },
      getSelectChampionshipRaces: function (code)
      {
        var url = 'http://192.168.1.4/api-servirace/api/v2/race/get/cup_races.php';

        //Very important to send correctly params with GET
        var data = { cup_code: code};

        var config = {
          params: data
        };

        return requestService.GetRequestParams(url, config);
      },
    };
});

