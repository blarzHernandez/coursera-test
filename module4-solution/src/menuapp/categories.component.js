(function(){
  'use strict';

  angular.module("MenuApp")
  .component("categories",{
    templateUrl:"src/menuapp/views/categories.view.html",
    bindings:{
      items:'<'
    }
  })
})();
