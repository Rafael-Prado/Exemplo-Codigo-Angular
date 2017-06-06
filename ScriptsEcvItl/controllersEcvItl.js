angular.module("EcvItlApp.controller",[]). 
controller("ControllerEcvItl", function ($scope, $http, $location) {
    $scope.ecvItl = [];
    angular.element(document).ready(function () {
        $scope.GetHistoricoDescricao();
    });

   
    $scope.AddHistoricoDescricao = function (aEcvItl) {
        aEcvItl.EcvItlId = $location.search().ecvItlId;
        $http.post("/HistoricoDescricao/Create", { aEcvItl: aEcvItl }).
            success(function (response) {
                alert(response.status);
                $scope.ecvItl.push(angular.copy(aEcvItl));
                delete $scope.aEcvItl;
        }).error(function(response) {
             alert(response.status);
            });
    };
    
    var ecvItlId = $location.search().ecvItlId;
    $scope.GetHistoricoDescricao = function () {
        $http.post("/HistoricoDescricao/GetHistoricoDescricao", {ecvItlId:ecvItlId}).
            success(function(data) {
                $scope.ecvItl = data;
            
        }).error(function() {
            alert("Retorne a lista de empresas!!!");
        });
    };
    
})