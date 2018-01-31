'use strict';

angular.module('myApp.registration', ['ngRoute'])


.controller('RegistrationCtrl', ['$scope','$interval', '$timeout', '$location',function($scope, $interval, $timeout, $location) {
    $scope.user.signed = false;
    var appearReg = function(){
        $('.panelReg').addClass('appearReg');
        $('.overlayReg').addClass('appearOverlay');

    };
    var startReg = function() {
        $('.leftStripe').addClass('leftSlide');
        $('.rightStripe').addClass('rightSlide');
        $timeout(appearReg, 2000);

    };
    $timeout(startReg, 500);

    var welcomeTwo = function(){
        $('#welcomeTwo').addClass('readyAppear');
    $timeout((function(){
        $('#welcomeTwo').removeClass('readyAppear');
        $timeout((function(){
            $location.path('/dashboard');
        }),2000);
    }),3000);
    };
    var welcomeOne = function(){
        $('#welcomeOne').addClass('readyAppear');
        $timeout((function(){
            $('#welcomeOne').removeClass('readyAppear');
        }),3000);
        $timeout(welcomeTwo, 3500);
    };
    var linesLeave = function(){
        $('.leftStripe').removeClass('leftSlide');
        $('.rightStripe').removeClass('rightSlide');
        $timeout(welcomeOne, 1500);
    };
    var regComplete = function(){
        $('.overlayReg').removeClass('appearOverlay');
        $('.panelReg').removeClass('appearReg');
        $timeout(linesLeave, 1000);
    };

    $scope.signUpComplete = function(){
        $('.inputsReg').addClass('inputsLeave');
        $('.ready').addClass('readyAppear');
        $timeout(regComplete, 1500);
        $scope.user.signed = true;
    };

}]);