// 'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', ['ngAnimate',
    'myApp.dashboard',
    'myApp.water',
    'myApp.training',
    'myApp.note',
    'myApp.food',
    'myApp.health',
    'myApp.settings',
    'myApp.version',
    'ngRoute'
])


.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');


  $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'DashboardCtrl'
  })
      .when('/food', {
        templateUrl: 'food/food.html',
        controller: 'FoodCtrl'
    })
      .when('/health', {
          templateUrl: 'health/health.html',
          controller: 'HealthCtrl'
      })
      .when('/note', {
          templateUrl: 'note/note.html',
          controller: 'NoteCtrl'
      })
      .when('/settings', {
          templateUrl: 'settings/settings.html',
          controller: 'SettingsCtrl'
      })
      .when('/training', {
          templateUrl: 'training/training.html',
          controller: 'TrainingCtrl'
      })
      .when('/water', {
          templateUrl: 'water/water.html',
          controller: 'WaterCtrl'
      })
      .otherwise({redirectTo: '/dashboard'});

}]);


$('.navOverlay').mouseenter(function(){
    $(this).addClass('shine');
});
$('.navOverlay').mouseleave(function(){
    $(this).removeClass('shine');
})

