angular.module('alurapic', ['diretivas', 'ngRoute']).config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/main.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html'
    });

    $routeProvider.otherwise({ redirectTo: '/fotos' });
});