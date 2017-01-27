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
    'pascalprecht.translate',
    'ui.bootstrap'
  ])

//Remove UnhandledRejection in qprovider : http://stackoverflow.com/a/40366492/3655781
.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])
.config(function($httpProvider) {
    $httpProvider.defaults.headers.post  = { 'Accept': 'application/json',
                                            'Content-Type': 'application/x-www-form-urlencoded'};

    $httpProvider.defaults.headers.get  = { 'Accept': 'application/json',
                                            'Content-Type': 'application/x-www-form-urlencoded'};
})
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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
       .when('/event', {
        templateUrl: 'views/events.html',
        controller: 'EventCtrl',
        controllerAs: 'event'
      })
       .when('/race', {
        templateUrl: 'views/race_details.html',
        controller: 'RaceCtrl',
        controllerAs: 'race'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
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

    if (window.localStorage.getItem('language') === null || window.localStorage.getItem('language') === '')
    {
      window.localStorage.setItem('language','en');
    }
    
}])
;
