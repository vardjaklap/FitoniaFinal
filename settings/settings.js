'use strict';

angular.module('myApp.settings', ['ngRoute'])


.controller('SettingsCtrl', ['$scope','$interval', '$timeout',function($scope, $interval, $timeout) {
    $('#navSet').addClass('shine');
    $scope.menuCount = 1;
    $scope.openMenu = function(){
        $scope.menuCount += 1;
        if($scope.menuCount%2 == 0){
            $('#blocks').addClass( "blocksActive", 4500, "easeOutBounce");
            $('#menuBut1').addClass( "menubar1", 4500, "easeOutBounce");
            $('#menuBut2').addClass( "menubar2", 4500, "easeOutBounce");
            $('#menuBut3').addClass( "menubar3", 4500, "easeOutBounce");
        }else{
            $('#blocks').removeClass( "blocksActive", 1000, "easeOutBounce");
            $('#menuBut1').removeClass( "menubar1", 4500, "easeOutBounce");
            $('#menuBut2').removeClass( "menubar2", 4500, "easeOutBounce");
            $('#menuBut3').removeClass( "menubar3", 4500, "easeOutBounce");
        }
    };

}]);