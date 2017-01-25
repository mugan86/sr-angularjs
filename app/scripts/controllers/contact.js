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

      /*

          $ionicLoading.show({
              template: "Datuak bidaltzen...<br/><ion-spinner icon='lines' class='spinner-positive'></ion-spinner><br/>"
          });


          var params = {deviceid: device_id, username: $scope.eskaera.username, password: $scope.eskaera.password};

          console.log("URL: " + URL_LOCALHOST+LOGIN_FORM_URL);
          console.log("Send parameters: " + params);
          $http.post(URL_LOCALHOST+SEND_FORM_URL, angular.toJson(params))
                          .success(function(data){
                    console.log("Data Stored (77): " + data.stored);

                    console.log("Data Stored (79): " + data);

                    $scope.data_id = data.data_id;

                    console.log(data.data_id);
                    $scope.url = URL_LOCALHOST + SEND_ESKAERA_IMAGE + data.data_id;

                    console.log($scope.url);
                    console.log("TEST: " + $scope.eskaera.picture + "(PICTURE)====> Stored?" + data.stored);



            }).error(function()
            {
              console.log('Error');
               $scope.showMessage("Ezuzteko arazo baten eraginez, datuak ez dira zuzen bidali, saiatu berriro mesedez", 0);
            })
            .then(function() {

              if ($scope.stored === true)
              {
                //window.alert("Datuak zuzen bidali dira");
                $ionicLoading.hide();
                $scope.showMessage("Datuak zuzen bidali dira", 1);
                $state.go('app.portada', {}, {reload: true});

              }
              else if ($scope.stored === false)
              {
                $ionicLoading.hide();
                $scope.showMessage("Ezuzteko arazo baten eraginez, datuak ez dira zuzen bidali, saiatu berriro mesedez", 0);
                //window.alert("Ezuzteko arazo baten eraginez, datuak ez dira zuzen bidali, saiatu berriro mesedez");
              }

          });
*/
      }
      else
      {
        console.log("No data correct");
      }
    };

});
