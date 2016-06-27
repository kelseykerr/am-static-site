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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'abtCtrl'
      })
      .when('/photography', {
        templateUrl: 'views/photography.html',
        controller: 'PhotographyCtrl',
        controllerAs: 'photoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])

  .constant('photos', [
      {path: 'images/balloon.jpg', title: 'balloon', showDetails: false},
      {path: 'images/baseball_2.jpg', title: 'baseball', showDetails: false},
      {path: 'images/collided_balloons.jpg', title: 'balloons', showDetails: false},
      {path: 'images/fall_leaves.jpg', title: 'leaves', showDetails: false},
      {path: 'images/flower_1.jpg', title: 'flower', showDetails: false},
      {path: 'images/flower_bee.jpg', title: 'flower', showDetails: false},
      {path: 'images/pink_flower.jpg', title: 'pink flower', showDetails: false},
      {path: 'images/purple_flower.jpg', title: 'purple flower', showDetails: false},
      {path: 'images/waterfall_1.jpg', title: 'waterfall', showDetails: false},
      {path: 'images/wilting_flower.jpg', title: 'wilting flower', showDetails: false}

  ]);
