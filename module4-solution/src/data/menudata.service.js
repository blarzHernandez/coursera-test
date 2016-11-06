(function(){
  'use strict';

  angular.module('Data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http','API_PATH'];

  function MenuDataService($http,API_PATH){
     var service = this;

     //Get categories
     service.getCategories = function(){

       var response = $http({
                      method: 'GET',
                      url:(API_PATH + 'categories.json')


       })
       .then(function(result){
         return result.data;
       })



       return response;
     }//end getCategories

     //Get item for category x
     service.getItemsForCategory = function (categoryShortName){

       var response = $http({
                  method:'GET',
                  url:(API_PATH + "menu_items.json"),
                  params:{
                    short_name: categoryShortName
                  }
       })
       .then(function(result){
         return result.data;
       });
       console.log(response);
       return response
     }

  }//end MenuDataService

})();
