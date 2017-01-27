'use strict';

/**
 * @ngdoc function
 * @name translationsApp.constant:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the translationsApp
 */
angular.module('serviraceApp')

.constant('LOCALHOST', {    v1: 'https://mugan86.com/serviraces/api/v1/',
                            v2: 'https://mugan86.com/serviraces/api/v2/'

                        })
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
.constant('ERGAST', 'http://ergast.com/api/f1/drivers/alonso/circuits/monza/races.json')
;