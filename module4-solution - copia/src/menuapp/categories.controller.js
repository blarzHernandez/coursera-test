(function(){
  'use strict';

  angular.module("MenuApp")
  .controller('CategoriesController',CategoriesController);

  CategoriesController.$inject = ['listCateg'];

  function CategoriesController(listCateg){
    var categ = this    ;

    categ.items = listCateg;
  }

})();
