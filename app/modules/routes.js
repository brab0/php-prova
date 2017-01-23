angular.module('AppTasks')
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider
        .otherwise('/readme');

     	$stateProvider
        .state('app', {
          url: '/',
          views: {
            'app': {
              templateUrl: 'template/app.html',
              controller : 'MainCtrl'
            },
            'sidebar@app': {
              templateUrl: 'template/parts/sidebar.html'
            },
            'main@app': {
              templateUrl: 'template/parts/main-content.html'
            }
          }
        })
        .state('app.readme', {
          url: 'readme',
          views: {
            'content': {
              templateUrl: 'modules/readme/view.html',
              controller : 'ReadMeCtrl'
            }
          }
        })
        .state('app.primeira', {
          url: 'primeira-questao',
          views: {
            'content': {
              templateUrl: 'modules/primeira/view.html',
              controller : 'PrimeiraCtrl'
            }
          }
        })
        .state('app.segunda', {
          url: 'segunda-questao',
          views: {
            'content': {
              templateUrl: 'modules/segunda/view.html',
              controller : 'SegundaCtrl'
            }
          }
        })
        .state('app.terceira', {
          url: 'terceira-questao',
          views: {
            'content': {
              templateUrl: 'modules/terceira/view.html',
              controller : 'TerceiraCtrl'
            }
          }
        })
        .state('app.quarta', {
          url: 'quarta-questao',
          views: {
            'content': {
              templateUrl: 'modules/quarta/view.html',
              controller : 'QuartaCtrl'
            }
          }
        });
      }
    ]);
