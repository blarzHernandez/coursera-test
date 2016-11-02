(function () {
'use strict';

angular.module('ShoppingListEventsApp', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory)
.service('WeightLossFilterService',WeightLossFilterService)
.component('shoppingList', {
  templateUrl:"shoppingList.html",
  controller:ShoppingListComponentController,
  bindings:{
    items: '<',
    myTitle: '@title',
    onRemove: '&'
  }
})
.component('loadingSpinner',{
  templateUrl:'spinner.html',
  controller: SpinnerController
});


SpinnerController.$inject = ['$rootScope'];
function SpinnerController ($rootScope){
  var $ctrl = this;

  var cancelListener = $rootScope.$on('shoppinglist:processing',function(event, data){
    console.log("Event: ", event);
    console.log("Data: ", data);
    if(data.on){
      $ctrl.showSpinner = true;
    //  console.log(  $ctrl.showSpinner);
    }else{
      $ctrl.showSpinner = false;
    }
  });


  //destroy
  $ctrl.$onDestroy = function(){
      cancelListener();
  }

}



ShoppingListComponentController.$inject = ['$rootScope','$element','$q', 'WeightLossFilterService'];
function ShoppingListComponentController($rootScope,$element,$q,WeightLossFilterService) {
  var $ctrl = this;
  var totalItem;
  $ctrl.cookiesInList = function () {
    for (var i = 0; i < $ctrl.items.length; i++) {
      var name = $ctrl.items[i].name;

      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };


$ctrl.remove = function(myIndex){
  $ctrl.onRemove({index:myIndex});
}

$ctrl.$onInit = function(){
  totalItem = 0;
}

$ctrl.$onChanges = function(changeObj){
  //console.log("Changes", changeObj);
}


$ctrl.$doCheck = function(){
  var warningElem = $element.find("div.error");
  if($ctrl.items.length !== totalItem){
    totalItem = $ctrl.items.length;
    $rootScope.$broadcast('shoppinglist:processing',{on:true});
    var promises = [];

    for (var i = 0; i < $ctrl.items.length; i++) {
      promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
    }

    $q.all(promises)
    .then(function(result){
      warningElem.slideUp(900);
    })
    .catch(function(error){
      warningElem.slideDown(900);
    })
    .finally(function(){
      $rootScope.$broadcast('shoppinglist:processing',{on:false});
    });

  }
  }
}

ShoppingListController.$inject = ['ShoppingListFactory'];
function ShoppingListController(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = "Shopping List #1";
  list.title = origTitle + " (" + list.items.length + " items )";

  list.warning = "COOKIES DETECTED!";

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + " (" + list.items.length + " items )";
  };

  list.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    this.title = origTitle + " (" + list.items.length + " items )";
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

WeightLossFilterService.$inject = ['$q','$timeout'];
function WeightLossFilterService ($q,$timeout){
  var service = this;

  service.checkName = function (name) {
    var deferred = $q.defer();

    var result = {
      message:''
    };

    $timeout(function(){
      if(name.toLowerCase().indexOf('cookie')=== -1){
        deferred.resolve (result);
      }else{
        result.message = " Stay away from cookies, Blarz";
        deferred.reject(result);
      }
    },3000);

    return deferred.promise;

  };
}

})();
