(function(){
  'use strict';
  angular.module('public')
  .controller('MyInfoController',MyInfoController);

  MyInfoController.$inject =['prefer','ApiPath'];

  function MyInfoController(prefer,ApiPath){
    var $ctrl = this;
    var registered = false;
    if(prefer.length ==  0){
      $ctrl.registered = true;    
    }else{
      $ctrl.registered = false;
      $ctrl.preferences = prefer;
      $ctrl.basePath = ApiPath;

    }

    //console.log($ctrl.preferences[0].preferences);

  }

})();
