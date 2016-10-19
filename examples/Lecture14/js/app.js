(function(){
	'use strict';

	angular.module("CounterApp",[])
	.controller("CounterController",CounterController);

	CounterController.$inject = ['$scope'];

	function CounterController ($scope){
		$scope.onceCounter 	= 0;
		$scope.counter 		= 0;
		$scope.name 		= 'Blarz';
		$scope.showNumberOfWatchers = function(){
			console.log("Number of Watchers",$scope.$$watchersCount);
		};


		//onceCount function

		$scope.countOnce = function(){
			$scope.onceCounter = 1;
		}


		// $scope.$watch('onceCounter',function(newValue,oldValue){
		// 	console.log("old value",oldValue);
		// 	console.log("New value",newValue);

		// });

		// $scope.$watch('counter',function(newValue,oldValue){
		// 	console.log("Counter old value",oldValue);
		// 	console.log("Counter New value",newValue);

		// });
		$scope.upCounter = function(){
			$scope.counter++;
		}

		$scope.$watch(function(){
			console.log("Digest Loop Fired!");
		});


	}//end function

})();