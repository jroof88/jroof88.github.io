var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "templates/landing.html"
    }).when("/resume", {
        templateUrl : "templates/resume.html"
    }).when("/projects", {
        templateUrl : "templates/projects.html"
    }).when("/travel", {
        templateUrl : "templates/travel.html"
    }).otherwise({
        redirect : "templates/landing.html"
    })
});