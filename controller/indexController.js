var app = angular.module("smartstudy", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/register", {
        templateUrl : "login.htm"
    })
    .when("/login", {
        templateUrl : "login.htm"
    });
});
