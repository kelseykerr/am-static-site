'use strict';

/**
 * @ngdoc function
 * @name amSiteApp.controller:PhotographyCtrl
 * @description
 * # PhotographyCtrl
 * Controller of the amSiteApp
 */
angular.module('amSiteApp')
  .controller('PhotographyCtrl', ['$scope', '$route', '$http',
   function ($scope, $route, $http) {
     $scope.$route = $route;
     $scope.photography = {
      photos: [],

      loadPhotos: function() {
        $http.get('images.json')
               .then(function(res){
                  $scope.photography.photos = res.data;
                });
      },

      init: function () {
        $scope.photography.loadPhotos();
      }
     };

     $scope.photography.init();

  }]);
