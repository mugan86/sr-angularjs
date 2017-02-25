'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('ContactCtrl', function ($scope) {

    $scope.start = true;

    $scope.submitForm = function(form)
    {
      console.log("Click");
      if(form.$valid) {
          console.log("Data correct!!");

          console.log($scope.user.name + " ------ " + $scope.user.email);
      }
      else
      {
        console.log("No data correct");
      }
    };

});
