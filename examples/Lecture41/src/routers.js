(function(){
  'use strict';
  angular.module('ShoppingList')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

  function RoutesConfig ($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

//Set up UI states
  $stateProvider
  //Home
  .state('home',{
      url:'/',
      templateUrl: 'src/shoppinglist/templates/home.template.html'
  })
  //Premade list page
  .state('mainList',{
    url:'/main-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller : 'MainShoppingListController as mainList',
    resolve:{
      items:['ShoppingListService',function(ShoppingListService){
        console.log(ShoppingListService.getItems());
        return ShoppingListService.getItems();
      }]
    }

  })
  .state('mainList.itemDetail',{
  //  url:'/item-detail/{itemId}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller:'ItemDetailController as itemDetail',
    params:{
      itemId:null
    }
  });
  //another states

  }
})();
