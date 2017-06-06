angular.module("RequerenteApp.controller", ['ui.mask' ]).
controller("ControllerRequerente", function ($scope, $http) {

    $scope.requerente = [];
    $scope.tipos = [];

    $scope.CarregarRequerente = function () {
        $http.post("/Requerente/GetRequerente")
            .success(function (data) {
                $scope.requerente = data;
            }).error(function () {
                alert("Dados Não encontrado");
            });
    };

    var carregarTipos = function () {

        $http.get("/Requerente/GetTipoRequerente").success(function (data) {
            $scope.tipos = data;

        });
    }

    $scope.AddRequerente = function (aRequerente) {
        if (aRequerente.RequerenteId != null) {

            $http.post("/Requerente/Edit", { aRequerente: aRequerente }
            ).success(function (response) {
                alert(response.status);
                $scope.requerente.push(angular.copy(aRequerente));
                delete $scope.aRequerente;

            }).error(function (response) {
                alert(response.status);
            });
        } else {

            $http.post("/Requerente/Create", { aRequerente: aRequerente }
            ).success(function (response) {
                alert(response.status);
                $scope.requerente.push(angular.copy(aRequerente));
                delete $scope.aRequerente;

            }).error(function (response) {
                alert(response.status);
            });
        };
    };

    $scope.aRequerente = "";
    var date = "";
    $scope.RequerentePorId = function (id) {
        $http.post("/Requerente/GetRequerentePorId", { id: id })
            .success(function (data) {
                data.DataEntrada = date;
                $scope.aRequerente = data;
            }).error(function (data) {

            });
    };

    $scope.aRequerente = "";
    $scope.DeleteRequerentePorId = function (id, index) {
        $http.post("/Requerente/Delete", { id: id })
            .success(function (response) {
                alert(response.status);
                $scope.aRequerente.splice(index, 1);
            }).error(function (response) {
                alert(response.status);
            });
    };

    $scope.RequerentePorCpf = function (cpf) {

        $http.post("/Requerente/ObterPorCpf", { cpf: cpf })
            .success(function (data) {
            
                if (data == "") {
                    var datas = data.cpf = aRequerente.cpf;
                    $scope.aRequerente = datas;
                } else
                    data.DataEntrada = date;
                $scope.aRequerente = data;
            }).error(function (data) {

            });
    };

    $scope.RequerentePorCnpj = function (cnpj) {
       
        $http.post("/Requerente/ObterPorCnpj", { cnpj: cnpj })
            .success(function (data) {
            
                if (data == "") {
                    var datas = data.cnpj = aRequerente.cnpj;
                    $scope.aRequerente = datas;
                } else
                    data.DataEntrada = date;
                $scope.aRequerente = data;
            }).error(function (data) {

            });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };


    carregarTipos();
})