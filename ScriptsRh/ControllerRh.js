angular.module("RhApp.controller", []).
    controller("ControllerRh", function($scope, $http) {

        $scope.ferias = [];
        $scope.periodos = [];

        var carregarPeriodos = function(){

            $http.get("/Ferias/GetPeriodo")
                .success(function (data) {
                    $scope.periodos = data;
                });
        };

        var date = "/Date(1470920961447)/";

        function getFormattedDate(date) {
            var re = /-?\d+/;
            var m = re.exec(date);
            var d = new Date(parseInt(m[0], 10));
            return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
        }

        $scope.BuscarFeriasPorAno = function(id) {
            $http.post("/Ferias/GetFeriasPorAno", { id: id })
                .success(function (data) {
                    $scope.ferias = data;

                    var dataf = getFormattedDate(date);
                    console.log(dataf);
                }).error(function(response) {
                    alert("Não a ferias Cadastradas");
                });
        };

        $scope.aFerias = "";
        $scope.SalvarFerias = function (aFerias) {
            $http.post("/Ferias/SalvarFerias", { ferias: aFerias })
                .success(function (response) {
                    alert(response.status);
                    $scope.ferias.push(angular.copy.aFerias);
                    delete $scope.aFerias;
                    BuscarFeriasPorAno();
                }).error(function(response) {
                    alert(response.status);
                });
        };


        carregarPeriodos();
    });

