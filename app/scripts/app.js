'use strict';

/**
 * @ngdoc overview
 * @name amSiteApp
 * @description
 * # amSiteApp
 *
 * Main module of the application.
 */
angular
  .module('amSiteApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'angularGrid'
  ])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'abtCtrl'
      })
      .when('/photography', {
        templateUrl: 'app/views/photography.html',
        controller: 'PhotographyCtrl',
        controllerAs: 'photoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
