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
  	$scope.items.push({title: '¿Cuanto cuesta la aplicación?', description: 'Nada. 0 €. Con tener un móvil con sistema operativo de Android superior a 4.0 y la aplicación Google Play Store actualizada solo tendremos que descargar la aplicación buscando con el termino de búsqueda "servirace" o accediendo desde el siguiente enlace.', open: false});
  	$scope.items.push({title: 'No hay una version para Windows Phone, ¿Por qué?', description: 'Aunque tenga los conocimientos necesarios para hacer la aplicación para los dispositivos de iOS no la he desarrollado antes por dos razones principales, aunque estoy trabajando en una version web para que los usuarios que no dispongan ni móvil ni tablet con sistema operativo Android puedan disfrutar de Servirace:' + 
'<ul><li>Al ser un proyecto sin ninguna financiación el coste de la licencia de desarrolador para iTunes es de 99$/año por lo que el coste aumenta mucho ya que ahora hay que pagar los servidores para almacenar los datos de la aplicación.</li>' + 
'<li>Por falta de tiempo, Servirace es un proyecto que nació con el objetivo de cubrir una necesidad y que se ha ido desarrollando paso a paso, según las disponibilidad de tiempo de que disponga</li></ul>', open: false});
  	$scope.items.push({title: 'No encuentro una carrera, ¿Cómo puedo hacer que aparezca en la aplicación?', description: 'No te preocupes, para que aparezca en la app, tienes varias posibilidades de hacerlo:' + 
									'<ul><li>Desde la propia aplicación, en el menú lateral izquierdo en la zona de "Sugerir carreras</li>' + 
									'<li>Rellenando los datos de la carrera desde el siguiente formulario.</li>' + 
									'<li>Contactando mediante correo electrónico en la dirección servirace.app[arroba]gmail.com</li></ul>',  open: false});
  	$scope.items.push({title: '¿Qué ventajas tiene estar registrado?', 
						description: 'No te preocupes, para que aparezca en la app, tienes varias posibilidades de hacerlo:' + 
									'<ul><li>Desde la propia aplicación, en el menú lateral izquierdo en la zona de "Sugerir carreras</li>' + 
									'<li>Rellenando los datos de la carrera desde el siguiente formulario.</li>' + 
									'<li>Contactando mediante correo electrónico en la dirección servirace.app[arroba]gmail.com</li></ul>', 
						open: false});

  	console.log(angular.toJson($scope.items));
  	console.log($scope.items.length);

});