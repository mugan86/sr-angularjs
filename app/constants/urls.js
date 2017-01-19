'use strict';

/**
 * @ngdoc function
 * @name translationsApp.constant:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the translationsApp
 */
angular.module('serviraceApp')

.constant('LOCALHOST', 'http://mugan86.com/serviraces/api/v1/')
.constant('RACES', {
                        afterBefore: 'race/get/race_infov4.php',
                        championships: 'race/get/championship.php',
                        cupsRacesSelect: 'race/get/cup_races.php?cup_code=',
                        racesListAllWithFiltFromLastUpdate: 'race/get/race_list_json.php&page=${$page}'
                    })
.constant('TRAFFIC', {
                        afterBefore: 'race/get/race_infov4.php',
                        championships: 'race/get/championship.php',
                        cupsRacesSelect: 'race/get/cup_races.php?cup_code='
                    })
.constant('INFO', {
						stats: 'info/get/stats.php'
					})
;