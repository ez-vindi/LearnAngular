/*global angular*/

/* Obter postagens */
var app = angular.module('myApp', []);

/*
app.controller('customersCtrl', function($scope, $http) {
  $http.get("http://jsonplaceholder.typicode.com/posts/")
  .success(function (response) {
    $scope.data = response;
    
  });
});
*/

app.controller('showusers', function($scope, $http) {
  $http.get("http://jsonplaceholder.typicode.com/users/")
  .success(function (response) {
    $scope.users = response;
    
  });
});