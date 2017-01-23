angular.module('AppTasks')
    .controller('ReadMeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
      $rootScope.pageTitle = 'Read Me';
      $rootScope.pageSubtitle = 'Overview';
    }]);
