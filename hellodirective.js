var app = angular.module("sreeapp",[]);


app.controller("helloCtrl",function($scope){
	$scope.name ="sriram";
});


app.service('helloService',function(){
	this.sayHello = function(test){
		return "Hello service from directive1";
	}
});
app.directive('helloWorld',function(){
	return {
		restrict:'AE',
		replace:'true',
		template:'<h3> Hello world sriram</h3>'
	}
});