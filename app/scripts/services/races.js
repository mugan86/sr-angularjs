'use strict';

angular.module('serviraceApp')
  .service('racesService', function racesService(LOCALHOST, RACES, requestService, ERGAST) {
    return {

      getNextRaces: function()
      {
        return requestService.GetRequest('races.json');
      },

      getNextTwoMonthsRacesData: function(first_data, second_data, race_name, race_type, district, distance) 
      {


        var url = LOCALHOST.v2 +'race/get/race_info_list.php';

        return requestService.PostRequest(url, {first_data: getTodayData(), 
                                                  second_data: getFutureData(60), 
                                                  race_name: race_name, 
                                                  distance: distance, 
                                                  race_type: race_type, 
                                                  district: district});
      },
      getSelectRaceNearServices: function (code, category, distance, circle)
      {
        var url =  LOCALHOST.v1 + 'race/get/test_post.php';
      
        return requestService.PostRequest(url, {race_name: code, category_filt: category, service_distance: distance, circle_circuit: circle});


      },
      getActiveChampionships: function ()
      {
        var url = LOCALHOST.v2 + 'race/get/championship.php';

        return requestService.GetRequest(url);
      },
      getSelectChampionshipRaces: function (code)
      {
        var url = LOCALHOST.v2 + 'race/get/cup_races.php';

        //Very important to send correctly params with GET
        var data = { cup_code: code};

        var config = {
          params: data
        };

        return requestService.GetRequestParams(url, config);
      },
      /*************************************************************************************
              Return data to select last events.
              EVENTS:
              =================================================
              * race
              * opinion
              * most_rated
      **************************************************************************************/
      getLastEvents: function (event, items)
      {
        
        var url = 'http://192.168.1.4/api-servirace/api/v2/race/get/last_events.php';

        //Very important to send correctly params with GET
        var data = { event: event, items: items};

        var config = {
          params: data
        };

        return requestService.GetRequestParams(url, config);
      },

      getErgast: function()
      {
        return requestService.GetRequest(ERGAST);
      },
    };
});

