(function(){
  'use strict';
  angular.module("MenuApp")
  .controller("ItemCategoryController",ItemCategoryController);

  ItemCategoryController.$inject = ['items'];

  function ItemCategoryController(items){
    console.log(items);
    var itemCategory = this;
    itemCategory.items = items['menu_items'];



  }

})();
