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
				onRemove:'&',
				message:'@'
			},
			controller:FoundItemsController,
			controllerAs:'foundList',
			bindToController:true
		}
		return ddo;

	}


	function FoundItemsController(){
		var founds = this;
		founds.checkData = function(){
			console.log(founds.found.length);
			if(founds.found.length === 0){
				return true;
			} else{
				return false;
			}
		}
	}

	//Dependency inject our service
	NarrowItDownController.$inject = ['$scope','MenuSearchService'];
	function NarrowItDownController ($scope,MenuSearchService){
		var objNarrow = this;
		objNarrow.message = '';

		//objNarrow.found = MenuSearchService.getFoundItems();

		objNarrow.searchMatch = function(searchT){
				objNarrow.found = [];
				if(searchT === undefined || searchT === ''){
						objNarrow.message = 'Nothing found!';						
						
				}else{
					
				    objNarrow.message = '';
					var promis = MenuSearchService.getMatchedMenuItems(searchT);
					

					promis.then(function(result){
						console.log(result.length);
						if(result.length == 0){	
							objNarrow.found = [];						
							objNarrow.message = 'Nothing found!';
						}else{
							objNarrow.found = result;
						}
						
				}).catch(function(error){
					console.log(error);
				});
			}
		}


		//removeItem function
		objNarrow.removeItem = function(index){
			objNarrow.found.splice(index,1);
		}






	}//end NarrowItDownController

MenuSearchService.$inject = ['$http','BasePath']
	// MenuSearchService Service
function MenuSearchService ($http,BasePath){
	var service = this;
	

	//Get Matched menu items
	service.getMatchedMenuItems = function(searchItem){
    
	var response = $http({
				method		: 'GET',
				url 			: (BasePath + "menu_items.json"),
				params    :{
					description : searchItem
				}
			})
			.then(function(result) {
				var foundItems = [];
			   	for (var i = 0; i < result.data.menu_items.length; i++) {
					    var matched = result.data.menu_items[i].description;

						//console.dir(matched.toLowerCase().indexOf(searchItem));
							if(matched.toLowerCase().indexOf(searchItem) !== -1){
								foundItems.push(result.data.menu_items[i]);
						}
			   }
			  
				 return foundItems;
			});

		return response;
	}//end getMatchedMenuItems


	service.getFoundItems = function(){
		 return foundItems;

	}


	service.removeItem = function(index){
		foundItems.splice(index,1);
	}


}//end MenuSearchService



})();
