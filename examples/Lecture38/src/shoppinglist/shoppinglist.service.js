(function(){
  'use strict';

  angular.module('ShoppingList')
  .service("ShoppingListService",ShoppingListService);

  ShoppingListService.$inject = ['$q','$timeout'];
  function ShoppingListService ($q,$timeout){
    var service = this;


    var items = [];
    items.push({
      name:'sugar',
      quantity:'2 bags',
      description:'Sugar used for baking delicious umm...'
    });
    items.push({
      name:'Other Product',
      quantity:'2 bags',
      description:'Sugar used for baking delicious umm...'
    });

  items.push({
    name:'Chocolate Chips',
    quantity:'3 bags',
    description:'Put these in the dougt. No reason, really. Gotta store them somewhere'
  });

  service.getItems = function () {
    var deferred = $q.defer();

    $timeout(function(){
      deferred.resolve(items);
    },800);

    return deferred.promise;
  }

  }
})();
