(function(){

'use strict';

angular.module("public")
.controller('NewsletterController',NewsletterController);

NewsletterController.$inject = ['MenuService','$filter','PreferencesService'];
 function NewsletterController(MenuService,$filter,PreferencesService){
   var $ctrl      = this;
   $ctrl.saved   = false;

     var prefer = PreferencesService.getPreferences();
     console.log(prefer.length);
     if(prefer.length == 0){
       $ctrl.saved   = false;
     }else{
       $ctrl.saved   = true;
     }


   $ctrl.submit = function(){

     $ctrl.message    = '';
     var favoriteD = $filter('uppercase')($ctrl.favoriteDish);
     var dataUser  = {
       firstName    : $ctrl.firstName,
       lastName     : $ctrl.lastName,
       email        : $ctrl.email,
       phoneNumber  : $ctrl.phoneNumber,
       favoriteDish :favoriteD
     }


      var promise = MenuService.getItem(favoriteD);
        promise.then(function(response){
          PreferencesService.savePreferences(dataUser,response);
          $ctrl.preferences = PreferencesService.getPreferences();
          $ctrl.message = "Your Information has been saved!"
          $ctrl.msgSucccess   = true;
        })
        .catch(function(error){
            if(error.data.status == 500){
                $ctrl.msgSucccess   = false;
              $ctrl.message = 'No such menu number exists | ' + favoriteD ;
            }
        });
   }

   $ctrl.search = function(){
        var favoriteD = $filter('uppercase')($ctrl.favoriteDish);
        var promise = MenuService.getItem(favoriteD);
        promise.then(function(response){
            $ctrl.message = '' ;
        })
        .catch(function(error){
            if(error.data.status == 500){
              $ctrl.message = 'No such menu number exists | ' + favoriteD ;
            }
        });;

   }

 }

})();
