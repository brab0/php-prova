angular.module('AppTasks')
  .controller('PrimeiraCtrl', ['$scope', '$rootScope', '$http', 'settings',
    function($scope, $rootScope, $http, settings) {
      $rootScope.pageTitle = 'Primeira Questão';
      $rootScope.pageSubtitle = 'Iteração';

      $http.get(settings.api + '/iterations').then(function(res){
        $scope.dataIterations = res.data;        
      });

    }]);
