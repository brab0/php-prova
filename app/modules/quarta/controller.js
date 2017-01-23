angular.module('AppTasks')
  .controller('QuartaCtrl', ['$scope', '$rootScope', '$http', 'settings',
    function($scope, $rootScope, $http, settings) {
      $rootScope.pageTitle = 'Quarta Questão';
      $rootScope.pageSubtitle = 'Tasks';

      $scope.edit = false;

      getList();

      $scope.task = {
        titulo : '',
        descricao : ''
      };

      $scope.add = function(){
        $scope.showForm = true;
        $scope.edit = false;
      }

      $scope.editar = function(task){
        $scope.task = angular.copy(task);
        $scope.edit = true;
        $scope.showForm = true;
      }

      $scope.cancelar = function(){
        $scope.task = {
          titulo : '',
          descricao : ''
        };

        $scope.showForm = false;
        $scope.edit = false;
      }

      function getList(){
        $http.get(settings.api + '/tasks').then(function(res){
          $scope.tasks = res.data;
        });
      }

      $scope.insert = function(){
        $http.post(settings.api + '/tasks', $scope.task).then(function(res){
          $scope.cancelar();
          getList();
        });
      }

      $scope.update = function(){
        $http.put(settings.api + '/tasks/' + $scope.task.id, $scope.task).then(function(res){
          $scope.cancelar();
          getList();
        });
      }

      $scope.delete = function(){
        $http.delete(settings.api + '/tasks/' + $scope.task.id).then(function(res){
          $scope.cancelar();
          getList();
        });
      }

    }]);
