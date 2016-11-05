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
      .state('mainList',{
        url:'/main-list',
        templateUrl:'src/menuapp/views/categories.view.html',
        controller: 'CategoriesController as mainList',
        resolve:{
          items:['MenuDataService',function(MenuDataService){
            console.log(MenuDataService.getCategories());
            return MenuDataService.getCategories();
          }]
        }
      })
      ;
  }
})();
