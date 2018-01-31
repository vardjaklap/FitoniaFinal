'use strict';

angular.module('myApp.settings', ['ngRoute'])


.controller('SettingsCtrl', ['$scope','$interval', '$timeout', '$location',function($scope, $interval, $timeout, $location) {
    $scope.menuCount = 1;
    $timeout.cancel($scope.closeMen);
    $scope.openMenu = function(){
        if($scope.menuCount%2){
            $scope.menuCount += 1;
            $('#blocks').addClass( "blocksActive", 4500, "easeOutBounce");
            $('#menuBut1').addClass( "menubar1", 4500, "easeOutBounce");
            $('#menuBut2').addClass( "menubar2", 4500, "easeOutBounce");
            $('#menuBut3').addClass( "menubar3", 4500, "easeOutBounce");
            $scope.closeMen = $timeout($scope.closeMenu, 4000);
        }else{
            $scope.closeMenu();
            $timeout.cancel($scope.closeMen);
        }


    };
    $scope.closeMenu = function(){
        $scope.menuCount += 1;
        $('#blocks').removeClass( "blocksActive", 1000, "easeOutBounce");
        $('#menuBut1').removeClass( "menubar1", 4500, "easeOutBounce");
        $('#menuBut2').removeClass( "menubar2", 4500, "easeOutBounce");
        $('#menuBut3').removeClass( "menubar3", 4500, "easeOutBounce");
    };


}]);