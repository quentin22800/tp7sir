'use strict';
var api = angular.module('tpsirApp');
/**
 * @ngdoc function
 * @name tpsirApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tpsirApp
 */
api.config(['$resourceProvider', function ($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

api.factory('getPeopleService', ['$resource', function ($resource) {
  return $resource("http://localhost:9000/rest/domain/people");
}]);

api.controller('MainCtrl', ['$scope', '$log', 'getPeopleService','$http','$location', function ($scope, $log, getPeopleService, $http, $location) {
  $scope.getPeopleService = getPeopleService;
  var result = $scope.getPeopleService.query(function () {
    $scope.peoples = result;
  });
  $scope.savePeople = function(form){
    if($scope.name != null && $scope.name.trim() != ""){
      $http({
        method: 'POST',
        url: "http://localhost:9000/rest/domain/people?name="+$scope.name,
      }).then(function (result) {
      })
    }
  }
}]);

