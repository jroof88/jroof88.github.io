var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "templates/welcome.html"
    }).when("/resume", {
        templateUrl : "templates/resume.html"
    }).when("/projects", {
        templateUrl : "templates/projects.html"
    }).when("/photos", {
        templateUrl : "templates/photos.html"
    });
});