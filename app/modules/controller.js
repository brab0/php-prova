angular.module('AppTasks')
    .controller('MainCtrl', ['$scope', '$rootScope', '$mdSidenav', function($scope, $rootScope, $mdSidenav) {
      $rootScope.pageTitle = '';
      $rootScope.pageSubtitle = '';

      $scope.toggleSidebar = function(){
          $mdSidenav('left').toggle();
      }
    }]);
