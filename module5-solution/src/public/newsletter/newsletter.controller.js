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
     var favoriteD = $filter('uppercase')($ctrl.favoriteDish);
     var dataUser  = {
       firstName    : $ctrl.firstName,
       lastName     : $ctrl.lastName,
       email        :$ctrl.email,
       phoneNumber  : $ctrl.phoneNumber,
       favoriteDish :favoriteD
     }


      var promise = MenuService.getItem(favoriteD);
        promise.then(function(response){
          PreferencesService.savePreferences(dataUser,response);
          $ctrl.preferences = PreferencesService.getPreferences();
          $ctrl.message = "Your Information has been saved!"
          $ctrl.saved   = true;
        })
        .catch(function(error){
            if(error.data.status == 500){
              $ctrl.message = 'No such menu number exists | ' + favoriteD ;
            }
        });






   }

 }

})();
