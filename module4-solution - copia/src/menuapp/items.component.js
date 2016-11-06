(function(){
  'use strict';

  angular.module("MenuApp")
  .component("items",{
    templateUrl:"src/menuapp/views/item.view.html",
    bindings:{
      items:'<'
    }
  })
})();
