(function () {

'use strict';


  angular.module('SampleApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partials/splash-page.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  //Load controller
  angular.module('SampleApp')

  .controller('MainController', [
    '$scope', '$location',
    function($scope,$location) {

      console.log('width: ' +$(window).width());
      console.log('height: ' + $(window).height());

      $scope.apply = function(){
       $location.path('/apply');
      };


       $scope.transfer = function(){
        $location.path('/transfer');
      };

      $scope.overlay = function(){
        
          $('.overlay').toggleClass('on');
          $('.application-start').toggleClass('on');

       
      };

    }

  ]);


}());
