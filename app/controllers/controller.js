var fetch = angular.module("resume", []);

fetch.controller("resumeControl", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http({
      method: "get",
      url: "api/getData.php",
    }).then(function successCallback(response) {
      // Store response data
      $scope.names = response.data;
    });
  },
]);
