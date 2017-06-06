var app = angular.module("EcvItlApp", ["EcvItlApp.controller"], function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});