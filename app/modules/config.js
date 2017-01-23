'use strict';

angular.module('AppTasks', [
  'ui.router',
  'ngMaterial',
  'ngSanitize'
])
.config(['$httpProvider', '$mdThemingProvider',
  function($httpProvider, $mdThemingProvider) {

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('orange');
  }
])
.constant("settings", {
  api: "http://localhost/php-prova/api"
});
