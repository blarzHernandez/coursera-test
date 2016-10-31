(function(){
	'use strict';

	angular.module("NarrowItDownApp",[])
	.controller("NarrowItDownController",NarrowItDownController)
	.service("MenuSearchService",MenuSearchService)
	.constant("BasePath","https://davids-restaurant.herokuapp.com/")
	.directive("foundItems",FoundItemsDirective );


	function FoundItemsDirective (){

		var ddo = {
			templateUrl:"foundItemList.html",
			scope:{
				found : '<',
				onRemove:'='
			},
			controller:FoundItemsController,
			controllerAs:'foundList',
			bindToController:true
		}
		return ddo;

	}


	function FoundItemsController(){

	}

	//Dependency inject our service
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController (MenuSearchService){
		var objNarrow = this;




		objNarrow.searchMatch = function(searchT){
		  var message = '';
			if(searchT === ''){

			}
		  var promis = MenuSearchService.getMatchedMenuItems(searchT);

			promis.then(function(result){
			
				objNarrow.found = result;
			});

		}






	}//end NarrowItDownController

MenuSearchService.$inject = ['$http','BasePath']
	// MenuSearchService Service
function MenuSearchService ($http,BasePath){
	var service = this;
	var foundItems = [];

	//Get Matched menu items
	service.getMatchedMenuItems = function(searchItem){
	return $http({
				method		: 'GET',
				url 			: (BasePath + "menu_items.json"),
				params    :{
					description : searchItem
				}
			})
			.then(function(result) {

			   for (var i = 0; i < result.data.menu_items.length; i++) {
					    var matched = result.data.menu_items[i].description;

						//console.dir(matched.toLowerCase().indexOf('garlic'));
							if(matched.toLowerCase().indexOf(searchItem) !== -1){
								foundItems.push(result.data.menu_items[i]);
						}
			   }

				 return foundItems;
			});


	}//end getMatchedMenuItems


	service.getFoundItems = function(){
		 return foundItems;

	}


	service.removeItem = function(index){

	}


}//end MenuSearchService



})();
