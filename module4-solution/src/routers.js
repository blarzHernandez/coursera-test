(function(){
  'use strict';

  angular.module("MenuApp")
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

  function RoutesConfig ($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('home',{
            url:'/',
            templateUrl:'src/menuapp/views/home.view.html',

      })
      .state('allCategories',{
        url:'/all-categories',
        templateUrl:'src/menuapp/views/allcategories.view.html',
        controller: 'CategoriesController as categ',
        resolve:{
          listCateg:['MenuDataService',function(MenuDataService){
          //console.log(MenuDataService.getCategories());
          return MenuDataService.getCategories();

          }]
        }
      })
      .state('allCategories.itemCategory',{
      //  url:'/item-category',
        templateUrl:'src/menuapp/views/itemscategory.view.html',
        controller:'ItemCategoryController as itemCategory',
        params:{
          itemId:null
        },
        resolve:{
          items:['$stateParams','MenuDataService',function($stateParams,MenuDataService){

            return  MenuDataService.getItemsForCategory($stateParams.itemId)
            .then(function(items){
              return items.data;
            });
          }]
        }
      })
      ;
  }
})();
