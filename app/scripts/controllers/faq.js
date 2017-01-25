'use strict';

/**
 * @ngdoc function
 * @name serviraceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serviraceApp
 */
angular.module('serviraceApp')
  .controller('FaqCtrl', function ($scope) {

  	$scope.items = [];
  	$scope.items.push({title: 'Test1', description: 'Test2', open: false});
  	$scope.items.push({title: 'Test2', description: 'Test3', open: false});
  	$scope.items.push({title: 'Test3', description: 'Test3', open: false});
  	$scope.items.push({title: 'Test4', description: 'Test4', open: false});

  	console.log(angular.toJson($scope.items));
  	console.log($scope.items.length);

});