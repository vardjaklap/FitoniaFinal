'use strict';
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
    'myApp.registration',
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
      .when('/registration', {
          templateUrl: 'registration/registration.html',
          controller: 'RegistrationCtrl'
      })
      .otherwise({redirectTo: '/registration'});

}])

    .controller('MainCtrl', ['$scope','$interval', '$timeout',function($scope, $interval, $timeout) {

        $scope.user = users[1];
        $scope.note = notes[0];
        $scope.todayIs = new Date().getDay();
        console.log($scope.todayIs);

        $scope.$watch('todayIs',function(newValue,oldValue){
            if(newValue === 1){
                $scope.user.trDay = 'cardio'
            }else if(newValue === 2){
                $scope.user.trDay = 'arms'
            }else if(newValue === 3){
                $scope.user.trDay = 'core'
            }else if(newValue === 4){
                $scope.user.trDay = 'back'
            }else if(newValue === 5){
                $scope.user.trDay = 'legs'
            }else if(newValue === 6){
                $scope.user.trDay = 'stretch'
            }else if(newValue === 7){
                $scope.user.trDay = 'rest'
            }
        });


        $scope.tipNum= 1;
        $interval(callAtInterval, 5000);
        function callAtInterval() {
            if($scope.tipNum === 1){
                $('#tipTwo').addClass( "tipActive", 500, "easeOutBounce");
                $('#tipOne').removeClass( "tipActive", 2000, "easeOutBounce");
                $scope.tipNum += 1;
            }else if($scope.tipNum === 2){
                $('#tipOne').removeClass( "tipActive", 2000, "easeOutBounce");
                $('#tipThree').addClass( "tipActive", 500, "easeOutBounce");
                $('#tipTwo').removeClass( "tipActive", 2000, "easeOutBounce");
                $scope.tipNum += 1;

            }else if($scope.tipNum === 3){
                $('#tipOne').removeClass( "tipActive", 2000, "easeOutBounce");
                $('#tipFour').addClass( "tipActive", 500, "easeOutBounce");
                $('#tipThree').removeClass( "tipActive", 2000, "easeOutBounce");
                $scope.tipNum += 1;

            }else if($scope.tipNum === 4){
                $('#tipOne').removeClass( "tipActive", 2000, "easeOutBounce");
                $('#tipFive').addClass( "tipActive", 500, "easeOutBounce");
                $('#tipFour').removeClass( "tipActive", 2000, "easeOutBounce");
                $scope.tipNum += 1;
            }else if($scope.tipNum === 5){
                $('#tipOne').removeClass( "tipActive", 2000, "easeOutBounce");
                $('#tipSix').addClass( "tipActive", 500, "easeOutBounce");
                $('#tipFive').removeClass( "tipActive", 2000, "easeOutBounce");
                $scope.tipNum += 1;
            }else if($scope.tipNum === 6){
                $('#tipOne').removeClass( "tipActive", 2000, "easeOutBounce");
                $('#tipSeven').addClass( "tipActive", 500, "easeOutBounce");
                $('#tipSix').removeClass( "tipActive", 2000, "easeOutBounce");
                $scope.tipNum += 1;
            }else if($scope.tipNum === 7){

                $('#tipOne').addClass( "tipActive", 500, "easeOutBounce");
                $('#tipSeven').removeClass( "tipActive", 2000, "easeOutBounce");
                $scope.tipNum = 1;
            }
        }

    }]);




// $('.navOverlay').mouseenter(function(){
//     $(this).addClass('shine');
// });
// $('.navOverlay').mouseleave(function(){
//     $(this).removeClass('shine');
// });
//
