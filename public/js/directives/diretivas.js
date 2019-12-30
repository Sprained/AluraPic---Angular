angular.module('diretivas', []).directive('painel', function(){
    var ddo = {};
    ddo.restric = "AE";
    ddo.scope = {
        titulo: '@'
    };
    ddo.transclude = true;
    ddo.templateUrl = 'js/directives/painel.html';

    return ddo;
});