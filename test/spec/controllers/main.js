'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('serviraceApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });


    //Example


    /*var url_post_server_mugan = LOCALHOST + 'race/get/test_post.php';
                    
    //POST

    $http.post(url_post_server_mugan, {race_name: 'aloñako_igoera', category_filt: 'restaurant', service_distance: '10', circle_circuit: '1'})
                .then(function(response) {
    if (typeof response.data === 'object') {
      console.log(response);
      console.log(response.data);
      console.log(response.data.length);
        return response.data;
    } else {
      console.log(response.data);
        // invalid response
        return $q.reject(response.data);
    }

    }, function(response) {
      console.log(response);
        // something went wrong
        return $q.reject(response.data);
    });

    //GET

    $http.get('http://192.168.110.131/test.php')
                .then(function(response) {
    if (typeof response.data === 'object') {
      console.log(response);
      console.log(response.data);
      console.log(response.data.length);
        return response.data;
    } else {
      console.log(response.data);
        // invalid response
        return $q.reject(response.data);
    }

    }, function(response) {
      console.log(response);
        // something went wrong
        return $q.reject(response.data);
    });*/


  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });


});
