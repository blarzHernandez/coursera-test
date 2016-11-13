(function(){
  'use strict';
  angular.module('public')
  .component('myInfoComponent',{
    templateUrl:'src/public/my-info/my-info-item.html',
    bindings:{
      item:'<'
    }
  });
})();
