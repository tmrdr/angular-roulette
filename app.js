var app = angular.module("MyApp", []);
app.controller("MyController", ["$scope", function($scope) {
  $scope.author = "Toby";
  $scope.clicks = 0;

  $scope.click = function() {
    $scope.clicks++;
  };
}]);
