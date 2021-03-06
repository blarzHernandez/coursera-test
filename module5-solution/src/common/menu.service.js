(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var preferences = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

// ------Get item menu--------
  service.getItem = function(menuItem){
    var config = [];

    if(menuItem == ''){
        menuItem = null;
    }

    return $http.get(ApiPath + '/menu_items/'+menuItem+".json")
    .then(function(response){
      return response.data;
    });

  }//end getItem



}



})();
