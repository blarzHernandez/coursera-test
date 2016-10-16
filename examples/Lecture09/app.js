(function(){

'use strict';
angular.module("DIApp",[])
.controller("DIController",DIController);

	
	//DIController function
	function DIController($scope,
						  $filter,
						  $injector){
		
		$scope.name = "Blarz";
		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		};

		console.log($injector.annotate(DIController));
	}
	

	//Another function
	function AnnonateMe(name, job, blaz){
		return "blar";
	};

	//Output
	console.log(DIController.toString());


})();