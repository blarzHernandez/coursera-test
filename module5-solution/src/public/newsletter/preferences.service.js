(function(){
'use strict';

angular.module('public')
.service('PreferencesService',PreferencesService);

//PreferencesService.$inject = [''];
function PreferencesService(){
  var service = this;
  var preferences =[];
  var data = {
    dataUser:'',
    preferences:''
  };
  //Save preferences function
    service.savePreferences = function (dataUser,preference) {

       data = {
        dataUser:dataUser,
        preferences:preference
      };

      preferences.push(data);
    }///end savePreferences

  //get preferences
  service.getPreferences= function(){
    return preferences;
  }




}

})();
