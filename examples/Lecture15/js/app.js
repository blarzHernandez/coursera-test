(function(){
	'use strict';

	angular.module("CounterApp",[])
	.controller("CounterController",CounterController);

	//Dependecy inject
	CounterController.$inject = ['$scope','$timeout'];

	function CounterController($scope,$timeout){
		$scope.counter = 0;


		$scope.upCounter = function(){
			$timeout(function() {
				$scope.counter++;
				console.log("Counter incremented!");
			});
		}
		// $scope.upCounter = function(){
		// 	//$scope.counter++;
		// 	setTimeout(function(){
		// 		$scope.counter++;
		// 		console.log("Counter incremented!");
		// 		$scope.$digest();
		// 	},2000);
		// }

	}//end function CounterController
})();