'use strict';

angular.module('myApp.note', ['ngRoute'])



.controller('NoteCtrl', ['$scope','$interval', '$timeout',function($scope, $interval, $timeout) {
    $scope.menuCount = 1;
    $scope.openMenu = function(){
        $scope.menuCount += 1;
        if($scope.menuCount%2 === 0){
            $('#blocks').addClass( "blocksActive", 4500, "easeOutBounce");
            $('#menuBut1').addClass( "menubar1", 4500, "easeOutBounce");
            $('#menuBut2').addClass( "menubar2", 4500, "easeOutBounce");
            $('#menuBut3').addClass( "menubar3", 4500, "easeOutBounce");
            $timeout($scope.closeMenu, 4000);
        }else{
            $scope.closeMenu();
        }

    };
    $scope.closeMenu = function(){
        $('#blocks').removeClass( "blocksActive", 1000, "easeOutBounce");
        $('#menuBut1').removeClass( "menubar1", 4500, "easeOutBounce");
        $('#menuBut2').removeClass( "menubar2", 4500, "easeOutBounce");
        $('#menuBut3').removeClass( "menubar3", 4500, "easeOutBounce");
    };

    $scope.$watch('todayIs',function(newValue,oldValue){
        console.log(newValue)
        if(newValue === 1){
            $('#noteOne').addClass('activeDay');
        }else if(newValue === 2){
            $('#noteTwo').addClass('activeDay');
        }else if(newValue === 3){
            $('#noteThree').addClass('activeDay');
        }else if(newValue === 4){
            $('#noteFour').addClass('activeDay');
        }else if(newValue === 5){
            $('#noteFive').addClass('activeDay');
        }else if(newValue === 6){
            $('#noteOSix').addClass('activeDay');
        }else if(newValue === 7){
            $('#noteSeven').addClass('activeDay');
        }
    });

    $scope.textModelMon = $scope.user.noteM;
    $scope.textModelTue = $scope.user.noteTue;
    $scope.textModelWed = $scope.user.noteW;
    $scope.textModelThur = $scope.user.noteTh;
    $scope.textModelFri = $scope.user.noteFr;
    $scope.textModelSat = $scope.user.noteSat;
    $scope.textModelSun = $scope.user.noteSun;
    $scope.textModelAdd = $scope.user.noteAd;

    $scope.$watch('textModelMon',function(newValue,oldValue){
        $scope.user.noteM = $scope.textModelMon;
        if(newValue != '' && $scope.todayIs === 1){
            $scope.user.noteMessage = 'You have tasks for today!'
        };
    });
    $scope.$watch('textModelTue',function(newValue,oldValue){
        $scope.user.noteTue = $scope.textModelTue;
        if(newValue != '' && $scope.todayIs === 2){
            $scope.user.noteMessage = 'You have tasks for today!'
        };
    });
    $scope.$watch('textModelWed',function(newValue,oldValue){
        $scope.user.noteW = $scope.textModelWed;
        if(newValue != '' && $scope.todayIs === 3){
            $scope.user.noteMessage = 'You have tasks for today!'
        };
    });
    $scope.$watch('textModelThur',function(newValue,oldValue){
        $scope.user.noteTh = $scope.textModelThur;
        if(newValue != '' && $scope.todayIs === 4){
            $scope.user.noteMessage = 'You have tasks for today!'
        };
    });
    $scope.$watch('textModelFri',function(newValue,oldValue){
        $scope.user.noteFr = $scope.textModelFri;
        if(newValue != '' && $scope.todayIs === 5){
            $scope.user.noteMessage = 'You have tasks for today!'
        };
    });
    $scope.$watch('textModelSat',function(newValue,oldValue){
        $scope.user.noteSat = $scope.textModelSat;
        if(newValue != '' && $scope.todayIs === 6){
            $scope.user.noteMessage = 'You have tasks for today!'
        };
    });
    $scope.$watch('textModelSun',function(newValue,oldValue){
        $scope.user.noteSun = $scope.textModelSun;
        if(newValue != '' && $scope.todayIs === 7){
            $scope.user.noteMessage = 'You have tasks for today!'
        };
    });
    $scope.$watch('textModelAdd',function(newValue,oldValue){
        $scope.user.noteAd = $scope.textModelAdd;
        // if(newValue != ''){
        //     $scope.user.noteMessage = 'You have tasks for today!'
        // };
    });


    var canvas = document.querySelector('.snowNote'),
        ctx = canvas.getContext('2d'),
        windowW = window.innerWidth,
        windowH = window.innerHeight,
        numFlakes = 40,
        flakes = [];

    function Flake(x, y) {
        var maxWeight = 5,
            maxSpeed = 3;

        this.x = x;
        this.y = y;
        this.r = randomBetween(0, 1);
        this.a = randomBetween(0, Math.PI);
        this.aStep = 0.01;


        this.weight = randomBetween(2, maxWeight);
        this.alpha = (this.weight / maxWeight);
        this.speed = (this.weight / maxWeight) * maxSpeed;

        this.update = function() {
            this.x += Math.cos(this.a) * this.r;
            this.a += this.aStep;

            this.y += this.speed;
        }

    }

    function init() {
        var i = numFlakes,
            flake,
            x,
            y;

        while (i--) {
            x = randomBetween(0, windowW, true);
            y = randomBetween(0, windowH, true);


            flake = new Flake(x, y);
            flakes.push(flake);
        }

        scaleCanvas();
        loop();
    }

    function scaleCanvas() {
        canvas.width = windowW;
        canvas.height = windowH;
    }

    function loop() {
        var i = flakes.length,
            z,
            dist,
            flakeA,
            flakeB;

        // clear canvas
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, windowW, windowH);
        ctx.restore();

        // loop of hell
        while (i--) {

            flakeA = flakes[i];
            flakeA.update();



            ctx.beginPath();
            ctx.arc(flakeA.x, flakeA.y, flakeA.weight, 0, 0.8 * Math.PI, false);
            ctx.fillStyle = 'rgba(200, 185, 0, 0.7)';
            ctx.fill();

            if (flakeA.y >= windowH) {
                flakeA.y = -flakeA.weight;
            }
        }

        requestAnimationFrame(loop);
    }

    function randomBetween(min, max, round) {
        var num = Math.random() * (max - min + 1) + min;

        if (round) {
            return Math.floor(num);
        } else {
            return num;
        }
    }

    function distanceBetween(vector1, vector2) {
        var dx = vector2.x - vector1.x,
            dy = vector2.y - vector1.y;

        return Math.sqrt(dx*dx + dy*dy);
    }

    init();

    $scope.showHelp = function(){
        $('#helpNotePage').addClass("helpActive");

    };
    $scope.hideHelp = function(){
        $('#helpNotePage').removeClass("helpActive");
    };
}]);