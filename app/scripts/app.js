'use strict';

/**
 * @ngdoc overview
 * @name tpsirApp
 * @description
 * # tpsirApp
 *
 * Main module of the application.
 */
angular
  .module('tpsirApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
