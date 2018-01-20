'use strict';

angular.module('myApp.food', ['ngRoute'])



.controller('FoodCtrl', ['$scope','$interval',function($scope, $interval) {
    $scope.menuCount = 1;
    $scope.openMenu = function(){
        $scope.menuCount += 1;
        if($scope.menuCount%2 === 0){
            $('#menu').addClass( "activeMenu", 4500, "easeOutBounce");
            $('#menuBut1').addClass( "menubar1", 4500, "easeOutBounce");
            $('#menuBut2').addClass( "menubar2", 4500, "easeOutBounce");
            $('#menuBut3').addClass( "menubar3", 4500, "easeOutBounce");
        }else{
            $('#menu').removeClass( "activeMenu", 1000, "easeOutBounce");
            $('#menuBut1').removeClass( "menubar1", 4500, "easeOutBounce");
            $('#menuBut2').removeClass( "menubar2", 4500, "easeOutBounce");
            $('#menuBut3').removeClass( "menubar3", 4500, "easeOutBounce");
        }

    };

    var barFood1 = new ldBar("#calories");
    var barFood2 = new ldBar("#fats");
    var barFood3 = new ldBar("#protein");
    var barFood4 = new ldBar("#carbs");


    $scope.progressCals = 0;
    $scope.progressFats = 0;
    $scope.progressProt = 0;
    $scope.progressCarbs = 0;

    $scope.progressFood = 0;



    $scope.addChicken = function(){
        $scope.progressCals += 200;
        $scope.progressFats += 10;
        $scope.progressProt += 30;
        $scope.progressCarbs += 20;
    };
    $scope.addSoup = function(){
        $scope.progressCals += 300;
        $scope.progressFats += 20;
        $scope.progressProt += 5;
        $scope.progressCarbs += 20;
    };
    $scope.addBeef = function(){
        $scope.progressCals += 500;
        $scope.progressFats += 40;
        $scope.progressProt += 40;
        $scope.progressCarbs += 30;
    };
    $scope.addTarte = function(){
        $scope.progressCals += 600;
        $scope.progressFats += 10;
        $scope.progressProt += 5;
        $scope.progressCarbs += 60;
    };

    $scope.$watch('progressCals',function(newValue,oldValue){
        var progrCals = newValue / 10;
        if(newValue>=2500){
            barFood1.set(100);
            // $timeout($scope.removeSuccess, 2500);

        }else{
            barFood1.set(progrCals);

        }
    });
    $scope.$watch('progressFats',function(newValue,oldValue){
        var progrFats = newValue;
        if(newValue>=80){
            barFood2.set(100);
            // $timeout($scope.removeSuccess, 2500);

        }else{
            barFood2.set(progrFats);
        }
    });
    $scope.$watch('progressProt',function(newValue,oldValue){
        var progrProt = newValue;
        if(newValue>=130){
            barFood3.set(100);
            // $timeout($scope.removeSuccess, 2500);

        }else{
            barFood3.set(progrProt);

        }
    });
    $scope.$watch('progressCarbs',function(newValue,oldValue){
        var progrCarbs = newValue;
        if(newValue>=180){
            barFood4.set(100);
            // $timeout($scope.removeSuccess, 2500);

        }else{
            barFood4.set(progrCarbs);
        }
    });

    var canvas = document.querySelector('.snowFood'),
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
            ctx.fillStyle = 'rgba(0, 200, 83, 0.4)';
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

    $scope.tipNumFood = 1;
    $('#tipFourFood').addClass( "tipActive", 1000, "easeOutBounce");
    $interval(callAtInterval, 8000, 4);
    function callAtInterval() {
        if($scope.tipNumFood === 1){
            $('#tipOneFood').addClass( "tipActive", 500, "easeOutBounce");
            $('#tipFourFood').removeClass( "tipActive", 2000, "easeOutBounce");
            $scope.tipNumFood += 1;
            console.log($scope.tipNumFood);

        }else if($scope.tipNumFood === 2){
            $('#tipTwoFood').addClass( "tipActive", 500, "easeOutBounce");
            $('#tipOneFood').removeClass( "tipActive", 2000, "easeOutBounce");
            $scope.tipNumFood += 1;
            console.log($scope.tipNumFood);

        }else if($scope.tipNumFood === 3){
            $('#tipThreeFood').addClass( "tipActive", 1000, "easeOutBounce");
            $('#tipTwoFood').removeClass( "tipActive", 1000, "easeOutBounce");
            $scope.tipNumFood += 1;
            console.log($scope.tipNumFood);

        }else if($scope.tipNumFood === 4){
            $('#tipFourFood').addClass( "tipActive", 1000, "easeOutBounce");
            $('#tipThreeFood').removeClass( "tipActive", 1000, "easeOutBounce");
            $scope.tipNumFood = 1;
            console.log($scope.tipNumFood);

        }
    }

    $scope.showHelp = function(){
        $('#helpFoodPage').addClass("helpActive");
    };
    $scope.hideHelp = function(){
        $('#helpFoodPage').removeClass("helpActive");
    };

}]);