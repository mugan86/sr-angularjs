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
                return "Deskribapen gabe";
            }
            if (text.length > 80)
            {
            	return text.substring(0, 60) + '...';
            } 
			return text;
        };
});