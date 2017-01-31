
'use strict';

/**
 * @ngdoc directive
 * @name serviraceApp.directive:errSrc
 * @description
 * # fileread
 */
angular.module('serviraceApp')
  .directive('errSrc', function() {
      return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            console.log("ERROR!!!! " + index);
            scope.photos[attrs.index].is404 = true;
            scope.$apply();
          });
        }
      }
    });
