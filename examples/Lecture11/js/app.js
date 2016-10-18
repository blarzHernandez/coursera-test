(function(){
	'use strict';
	var app = angular.module("MsgApp",[])

	.controller("MsgController",MsgController);

	MsgController.$injector = ['$scope'];
	//Function
	function MsgController ($scope){
		$scope.name = 'Blarz';
		$scope.stateOfBeing = "happy";


		//feedBlarz function 
		$scope.feedBlarz = function(){
		$scope.stateOfBeing = 'fed';
		}

	}

	



})();