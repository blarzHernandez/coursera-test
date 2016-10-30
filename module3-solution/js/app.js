(function(){
	'use strict';

	angular.module("NarrowItDownApp",[])
	.controller("NarrowItDownController",NarrowItDownController)
	.service("MenuSearchService",MenuSearchService)
	.constant("BasePath","https://davids-restaurant.herokuapp.com/")
	.directive("foundItems",FoundItems );


	function FoundItems (){

	}

	//Dependency inject our service
	NarrowItDownController.$inject = ['$scope',"MenuSearchService"];
	function NarrowItDownController ($scope,MenuSearchService){
		var found = this;
		found.searchMatch = function(searchT){
				console.log(MenuSearchService.getMatchedMenuItems(searchT));
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

						//	console.dir(matched.toLowerCase().indexOf('garlic'));
							if(matched.toLowerCase().indexOf(searchItem) !== -1){
								foundItems.push(result.data.menu_items[i]);
						}
			   }

				 return foundItems;
			});

			//return reponse;
	}//end getMatchedMenuItems



}



})();
