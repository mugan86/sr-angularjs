'use strict';

/**
 * @ngdoc overview
 * @name serviraceApp
 * @description
 * # serviraceApp
 *
 * Main module of the application.
 */
angular
  .module('serviraceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])

//Remove UnhandledRejection in qprovider : http://stackoverflow.com/a/40366492/3655781
.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])
.config(function ($routeProvider, $locationProvider) {


    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.config(['$translateProvider', function ($translateProvider) {

    $translateProvider.translations('en', translations_en);
   
    $translateProvider.translations('es', translations_es);

    $translateProvider.translations('eu', translations_eu);
 
    $translateProvider.preferredLanguage(window.localStorage.getItem('language'));
    // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('escape');

    console.log('LANG: '+ window.localStorage.getItem('language'));

    if (window.localStorage.getItem('language') === null || window.localStorage.getItem('lang') === '')
    {
      window.localStorage.setItem('language','en');
    }
    
}])
;
