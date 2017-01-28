'use strict';

angular.module('serviraceApp')

.filter('showCorrectDataTime', function () {
        return function (text) {
            if (!text) {
                return text;
            }
			return text.replace('T', ' ').replace('.000Z', '').replace('Z', '');
        };
})
.filter('showOnlyIntroDescription', function () {
        return function (text) {
            if (!text) {
                return "Deskribapen gabe<br/>Proposatu erabiltzaileari gehitzen";
            }

            text = text.replace('==============================','');
            if (text.length > 80)
            {
            	return text.substring(0, 60) + '...';
            } 
			return text;
        };
})
.filter('showWikilocRoute', function ($sce) {
    return function(id) {
        console.log('Resource!!!!' + id);
      return $sce.trustAsResourceUrl('https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id='+ id + '&measures=off&title=off&near=off&images=off&maptype=S');
    };
  })
.filter('showMugibiliRoute', function ($sce) {
    return function(id) {
        console.log('Resource (Ibilbideak)!!!!' + id);

      return $sce.trustAsResourceUrl('http://mugibili.euskadi.eus/mugibili/minimap.do?id=' + id);
    };
});