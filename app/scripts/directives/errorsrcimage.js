
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
            if (attrs.src != attrs.errSrc) {
              attrs.$set('src', attrs.errSrc);
            }
          });
        }
      }
    });
