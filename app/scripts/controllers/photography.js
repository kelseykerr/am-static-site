'use strict';

/**
 * @ngdoc function
 * @name amSiteApp.controller:PhotographyCtrl
 * @description
 * # PhotographyCtrl
 * Controller of the amSiteApp
 */
angular.module('amSiteApp')
  .controller('PhotographyCtrl', ['$scope', '$route', 'photos', function ($scope, $route, photos) {
     $scope.$route = $route;
     $scope.photography = {
      photos: photos
     };
     $scope.photographySearch = undefined;

     $scope.$watch('photographySearch', function () {
     });
  }]);
