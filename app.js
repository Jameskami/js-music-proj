var musicApp = angular.module('musicApp', []);

musicApp.controller('dom', ['$scope', function($scope){
	$scope.test = ['a','b','c','d'];
}]);