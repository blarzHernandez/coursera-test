(function(){
  'use strict';
  angular.module("MenuApp")
  .controller("ItemCategoryController",ItemCategoryController);

  ItemCategoryController.$inject = ['$stateParams','items'];

  function ItemCategoryController($stateParams,items){
    console.log(items);
    var itemCategory = this;
    itemCategory.items        = items['menu_items'];
    console.log(items['category']['name']);
    itemCategory.categoryName = items['category']['name'];



  }

})();
