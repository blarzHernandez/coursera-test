(function(){
	'use strict';

	angular.module("MenuCategoriesApp",[])
	.controller("MenuCategoriesController",MenuCategoriesController)
	.service("MenuCategoriesService",MenuCategoriesService)
	.constant('ApiBasePath','http://davids-restaurant.herokuapp.com');


	//Dependency inject in our controller the service
	MenuCategoriesController.$inject = ['MenuCategoriesService'];

	//MenuCategoriesController function
	function MenuCategoriesController (MenuCategoriesService){
			var menu = this;

			//Get categories
			var promise = MenuCategoriesService.getMenuCategories();

			promise.then(function(response){
				menu.categories = response.data;
			})
			.catch(function(error){
				console.log("Something went terribly wrong.");
			});

			//Get item of category 
			menu.logMenuItems = function(shortName){
				var promise = MenuCategoriesService.getMenuForCategory(shortName);

				promise.then(function(response){
					console.log(response.data);
				});
				
			}


	}//end function


	//Dependency inject $http service
	MenuCategoriesService.$inject = ['$http','ApiBasePath'];

	function MenuCategoriesService ($http,ApiBasePath){
		var service = this;

		//Get categories
		service.getMenuCategories = function(){
			var response = $http({
				method		: "GET",
				url			: (ApiBasePath + "/categories.json")
			});
			return response;
		}//end getMenuCategories

		//Get menu item for category
		service.getMenuForCategory = function(shortName){
			var response = $http({
				method 	: 'GET',
				url		: (ApiBasePath + "/menu_items.json"),
				params  : {
						category : shortName
				}
			});

			return response;

		}//end getMenuForCategory







	}//end service

})();