/*global angular*//*
var blogApp = angular.module('blogApp', []);
/*
blogApp.controller('blogAppBody', function ($scope, $http) {
  $http.get('http://jsonplaceholder.typicode.com/posts/').success(function(data) {
      console.log(data);
    //$scope.phones = data;
  });

  //$scope.orderProp = 'age';
});*/

var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("http://jsonplaceholder.typicode.com/posts/")
  .success(function (response) {
    $scope.data = response;
    
  });
});