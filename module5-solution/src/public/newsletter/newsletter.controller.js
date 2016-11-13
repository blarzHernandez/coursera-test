(function(){

'use strict';

angular.module("public")
.controller('NewsletterController',NewsletterController);


 function NewsletterController(){
   var $ctrl = this;
   console.log($ctrl);
   $ctrl.submit = function(){
     $ctrl.validate = true;
   }

 }

})();
