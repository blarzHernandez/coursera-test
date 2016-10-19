(function(){

'use strict';

var app = angular.module("MsgApp",[])
		
		.controller("MsgController",MsgController);


			//Dependency Inject
			MsgController.$inject = ['$scope','$filter'];

			//MsgController function		
			function MsgController($scope, $filter){
				$scope.name 		= 'Blarz';
				$scope.stateOfBeing = 'happy';
				$scope.cookieCost	= 4;


				//sayMessage function
			$scope.sayMessage = function(){
				var msg 	= "Blarz like to eat healtly snacks at night";
				var output 	= $filter('uppercase')(msg);

				return output;


			}

			//feedBlarz function
			$scope.feedBlarz = function(){

				$scope.stateOfBeing = 'fed';

			}

	}//end MsgController function

			


})();