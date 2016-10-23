(function(){
	'use strict';

	//Objects

	//shoppintList1 | array
	var shoppingList1 = [
		"Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismo"
	];

	//shoppintList2 | object
	var shoppingList2 = [
		{
				name 			: "Milk",
				quantity 	: "2"
		},
		{
			name 				: "Donuts",
			quantity		: "200"
		},
		{
			name				: "Cookies",
			quantity 		: "300"
		}
	];

	angular.module("ShoppingListApp",[])

	.controller("ShoppingListController",ShoppingListController);

		//Dependecy inject
		ShoppingListController.$inject = ['$scope'];


		//ShoppingListController method
		function ShoppingListController($scope){
			$scope.shoppingList1 = shoppingList1;
			$scope.shoppingList2 = shoppingList2;

			//addToList function

			$scope.addToList = function(){
				var newItem  = {
					name 			: $scope.newItemName,
					quantity 	: $scope.newItemQuantity
				}

				$scope.shoppingList2.push(newItem);

			}

		}//end ShoppingListController




})();
