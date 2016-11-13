(function(){

'use strict';

angular.module("public")
.controller('NewsletterController',NewsletterController);


 function NewsletterController(){
   var $ctrl = this;
   
   $ctrl.submit = function(dish){
     $ctrl.validate = true;
     console.log(dish);
   }

 }

})();
