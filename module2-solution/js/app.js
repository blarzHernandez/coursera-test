(function(){

	'use strict'

	angular.module("ShoppingListCheckOff",[])
	.controller("ToBuyController",ToBuyController )
	.controller("AlreadyBoughtController",AlreadyBoughtController)
	.service("ShoppingListCheckOffService",ShoppingListCheckOffService);


	//Dependency inject
	ToBuyController.$inject = ['ShoppingListCheckOffService'];

	//ToBuyController function- reponsible of items to buys
	function ToBuyController (ShoppingListCheckOffService){
		var listToBuy = this;
		listToBuy.items = ShoppingListCheckOffService.getItems();
		try {

			if(listToBuy.items.length < 0){
				listToBuy.everythingBougth = "Everything is bought";
			}

		} catch (e) {
			listToBuy.errorMessage = e.message;
		}
	}

	//Dependency inject in our controller
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	//Responsible of items bought
	function AlreadyBoughtController(){

	}


	function ShoppingListCheckOffService(){
		var service = this;

		var items = [
			{
				"name" : "Bepto Bismol",
				"quantity": 10
			},
			{
				"name" : "Cookies 1",
				"quantity": 15
			},
			{
				"name" : "Bepto 3",
				"quantity": 10
			},
			{
				"name" : "Cookies 3",
				"quantity": 12
			},
			{
				"name" : "Bepto 23",
				"quantity": 23
			}
		];


		service.getItemsToBuy = function (item){

	 		items.push(item);
		}

		service.getItemsBought = function(){

		}

		service.getItems = function(){
			return items;
		}






	} //end ShoppingListCheckOffService

})();
