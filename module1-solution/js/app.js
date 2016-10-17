(function(){
	'use strict';

	angular.module("foodApp", [])

	.controller("foodController",function($scope){
		var message 	= '';
		var selectedOp 	= [];
	

		//Click event
		$scope.process = function(str){
			var input 	= '';
			var leng 	= 0;
			var pattern = [','];

			  if(str !=='' ){
				
				input = str.split(",");
				leng  = input.length;				
				if(leng> 0 && leng <= 3){
					$scope.message = "Enjoy!"
				}else{
					$scope.message ="Too Much";
				}
			}else{
				return null;
			}
			
			
 			 			

		};

		//Blur event
		$scope.blurE = function(){
			$scope.message = "";
		}

		//apply color
		$scope.color = function(filt){

		}




	});

})();