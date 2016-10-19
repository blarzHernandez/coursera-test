(function(){

'use strict';

var app = angular.module("MsgApp",[])

		.controller("MsgController",MsgController)
		.filter("loves",lovesFilter)
		.filter("truth",truthFilter);


			//Dependency Inject
			MsgController.$inject = ['$scope','$filter','lovesFilter'];

			//MsgController function
			function MsgController($scope, $filter,lovesFilter){
				$scope.name 		= 'Blarz';
				$scope.stateOfBeing = 'happy';
				$scope.cookieCost	= 4;


				//sayMessage function
			$scope.sayMessage = function(){
				var msg 	= "Blarz like to eat healtly snacks at night";
				var output 	= $filter('uppercase')(msg);

				return output;


			}

			//sayLovesMessage function
			$scope.sayLovesMessage = function(){
				var msg 	= "Blarz loves to eat healtly snacks at night";
				var output 	= lovesFilter(msg);

				return output;


			}

			//feedBlarz function
			$scope.feedBlarz = function(){

				$scope.stateOfBeing = 'fed';

			}



	}//end MsgController function

	//lovesFilter function
	function lovesFilter (){
		return function(input){
			input = input || "";
			input = input.replace("likes","loves");
				return input;
			}
	}


	//Another function (custom filter with arguments)
	function truthFilter(){
		return function(input,target,replace){
			input = input || "";
			input = input.replace(target,replace);

			return input;
		}
	}


})();
