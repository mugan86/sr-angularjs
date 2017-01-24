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
$scope.oneAtATime = true;

  $scope.groups = [{
    title: 'Dynamic Group Header - 1',
    content: 'Dynamic Group Body - 1'
  }, {
    title: 'Dynamic Group Header - 2',
    content: 'Dynamic Group Body - 2'
  },  {
    title: 'Dynamic Group Header - 3',
    content: 'Dynamic Group Body - 3'
  }];


  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };


  // work permit form
  $scope.transforms = [{
    name: "transform",
    id: 1,
    wpformfields: [{
      employee: '',
      admount: '',
      open: true
    }]
  }];

  $scope.addtransactionForm = function(transform) {

  	for (var i = 0; i < $scope.transforms.wpformfields.length; i++)
  	{
  		$scope.transforms.wpformfields[i].open = false;
  	}
    $scope.currentnum = transform.wpformfields.length;
    //alert("hello");

    transform.wpformfields.push({
      employee: '',
      amount: '',
      open: true
    });
  };

});
