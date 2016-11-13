(function(){

'use strict';

angular.module("public")
.controller('NewsletterController',NewsletterController);

NewsletterController.$inject = ['MenuService','$filter','PreferencesService'];
 function NewsletterController(MenuService,$filter,PreferencesService){
   var $ctrl      = this;


   $ctrl.submit = function(){
     $ctrl.saved   = false;
     $ctrl.message    = '';
     var dataUser  = {
       firstName    : $ctrl.firstName,
       lastName     : $ctrl.lastName,
       email        :$ctrl.email,
       phoneNumber  : $ctrl.phoneNumber,
       favoriteDish :$ctrl.favoriteDish
     }


      var promise = MenuService.getItem($filter('uppercase')($ctrl.favoriteDish));
        promise.then(function(response){
          PreferencesService.savePreferences(dataUser,response);
          $ctrl.preferences = PreferencesService.getPreferences();
          $ctrl.message = "Your Information has been saved!"
          $ctrl.saved   = true;
        })
        .catch(function(error){
            if(error.data.status == 500){
              $ctrl.message = 'No such menu number exists | ' + $filter('uppercase')($ctrl.favoriteDish) ;
            }
        });






   }

 }

})();
