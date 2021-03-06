angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId).success(function(foto){
            $scope.foto = foto;
        }).error(function(erro){
            console.log(erro);
        })
    }

    $scope.submeter = function(){
        if($scope.formulario.$valid){
            if($scope.foto._id){
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto).success(function(){
                    $scope.mensagem = 'Foto alterada com sucesso';
                }).error(function(error){
                    $scope.mensagem = "Não foi possivel alterar a foto";
                    console.log(error);
                });
            }
            else{
                $http.post('v1/fotos', $scope.foto).success(function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto incluida com sucesso';
                }).error(function(error){
                    $scope.mensagem = "Não foi possivel incluir a foto";
                    console.log(error);
                });
            }
        }
    }
});