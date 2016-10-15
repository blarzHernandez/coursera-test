(function(){
	'use strict'
	angular.module("myFirstApp",[])

	.controller("myFirstController",function($scope){
		$scope.name = "Blarz";
		$scope.sayHello = function(name){
			return name;
		}

	});



})();