var app = angular.module("sreeapp2",['sreeapp']);

app.controller("hellocontrollerclient",function($scope,helloService){
	$scope.name = helloService.sayHello();
});