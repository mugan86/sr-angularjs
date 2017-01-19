'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('MainCtrl', function (racesService, trafficService, $http, $q, LOCALHOST , RACES) {
    
    trafficService.getLastTrafficIncidents()
            .then(function(data) {
        console.log(data.length);

        var race_find_data = {first_data: '2017-01-25', second_data: null, race_name: null, race_type: null, races_next: '-15', district: '', distance: ''};
        console.log('PARAMS: ' + angular.toJson(race_find_data));

    }, function(response) {
        // something went wrong
       console.log(response);
    });

    //Pending to add correctly in different files

    var url = LOCALHOST + 'race/get/race_services_info_v3.php';//'race/get/race_photos.php'; //aloñako_igoera //anbotoko_kilometro_bertikala_-_kv_anboto

    console.log(url);

    $http({
     method: 'POST',
     url: LOCALHOST +'race/get/race_services_info_v3.php',
     data: {race_name: 'aloñako_igoera', circle_circuit: 1, service_distance: 4, category_filt: 'all'},
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function(response) {
    if (typeof response.data === 'object') {
      console.log(response.data);
      console.log(response.data.length);
        return response.data;
    } else {
        // invalid response
        return $q.reject(response.data);
    }

    }, function(response) {
        // something went wrong
        return $q.reject(response.data);
    });

});
