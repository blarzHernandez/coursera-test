(function(){

	'use strict'

	angular.module("ShoppingListCheckOff",[])
	.controller("ToBuyController",ToBuyController)
	.controller("AlreadyBoughtController",AlreadyBoughtController)
	.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

	
	//Dependency inject
	ToBuyController.$inject = ['ShoppingListCheckOffService'];

	//ToBuyController function- reponsible of items to buys
	function ToBuyController (ShoppingListCheckOffService){
		var listToBuy 			= this;
		listToBuy.toBuyItems 	= ShoppingListCheckOffService.getToBuyItems();
		listToBuy.messageEverything = "Everything is bought!";

		listToBuy.buyItem = function(id){

			ShoppingListCheckOffService.buyItem(id);
			listToBuy.toBuyItems 	= ShoppingListCheckOffService.getToBuyItems();
		}

	}

	//Dependency inject in our controller
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	//Responsible of items bought
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var boughtItemsList = this;
		boughtItemsList.messageNothing = 'Nothing bought yet!';
		
		try{
			boughtItemsList.itemsBought = ShoppingListCheckOffService.boughtItems();		

		
		}catch(e){
			boughtItemsList.errorMessage = error.message;
		}
		
	}


	function ShoppingListCheckOffService(){
		var service = this;

		var itemsBought 	= [];
		
		var itemsToBuy 		= [
			{
				"id"		: 1,
				"name" 		: "Bepto Bismol",
				"quantity"	: 10
			},
			{
				"id"		: 2,
				"name" 		: "Cookies 1",
				"quantity"	: 15
			},
			{
				"id"		: 3,
				"name" 		: "Bepto 3",
				"quantity"	: 10
			},
			{
				"id"		: 4,
				"name" 		: "Cookies 3",
				"quantity"	: 12
			},
			{
				"id"		: 5,
				"name" 		: "Bepto 23",
				"quantity"	: 23
			}
		];


		service.getToBuyItems = function (){

	 		return itemsToBuy;
		}

		//Get bouht items
		service.boughtItems = function(){
			return itemsBought;
		}

		//Set itemsBougt
		service.setItemsBought = function(id){
			
			itemsBought.push(itemsToBuy[id]);	
			
		}


		service.buyItem = function(id){
			
			this.setItemsBought(id);//add to bougth
			itemsToBuy.splice(id,1);//Remove

		}

		//Get all items
		service.getItems = function(){
			return itemsToBuy;
		}

		//Delete item
		service.remove = function(index){
			itemsToBuy.splice(index,1);
		}


	} //end ShoppingListCheckOffService

})();
