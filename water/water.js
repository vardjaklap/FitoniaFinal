'use strict';

angular.module('myApp.water', ['ngRoute', 'ngAnimate'])

    .controller('WaterCtrl', ['$scope','$interval', '$timeout',function($scope, $interval, $timeout) {
         $scope.menuCount = 1;
        $scope.openMenu = function(){
            $scope.menuCount += 1;
            if($scope.menuCount%2 == 0){
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

        $scope.progressWater = 0;
        $scope.add = function(){
            $scope.progressWater+= 100;
        };
        $scope.add250 = function(){
            $scope.progressWater+= 200;
        };
        $scope.add500 = function(){
            $scope.progressWater+= 500;
        };
        $scope.add1000 = function(){
            $scope.progressWater+= 1000;
        };
        $scope.addml = function(){
            $scope.progressWater+= Number(mili.value);
            mili.value = '';

        };
        var bar1 = new ldBar("#barwaterld");
        var bar2 = new ldBar("#barwaterhumanld");


        $scope.$watch('progressWater',function(newValue,oldValue){
            var progr = newValue / 25;
            if(newValue>=2500){
                $('#waterSuccess').addClass( "helpActive", 1000, "easeOutBounce");
                $('#barwaterld').attr("data-stroke", "rgb(255, 255, 0)");
                bar2.set(100);
                bar1.set(100);
                $timeout($scope.removeSuccess, 2500);

            }else{
                bar2.set(progr);
                bar1.set(progr);
            }
        });

        $scope.removeSuccess = function(){
            $('#waterSuccess').removeClass( "helpActive", 1000, "easeOutBounce");
        };




        $scope.tipNumWater = 1;
        $('#tipFour').addClass( "tipActive", 1000, "easeOutBounce");
        $interval(callAtInterval, 8000, 4);
        function callAtInterval() {
            if($scope.tipNumWater === 1){
                $('#tipOne').addClass( "tipActive", 500, "easeOutBounce");
                $('#tipFour').removeClass( "tipActive", 2000, "easeOutBounce");
                $scope.tipNumWater += 1;
                console.log($scope.tipNumWater);

            }else if($scope.tipNumWater === 2){
                $('#tipTwo').addClass( "tipActive", 500, "easeOutBounce");
                $('#tipOne').removeClass( "tipActive", 2000, "easeOutBounce");
                $scope.tipNumWater += 1;
                console.log($scope.tipNumWater);

            }else if($scope.tipNumWater === 3){
                $('#tipThree').addClass( "tipActive", 1000, "easeOutBounce");
                $('#tipTwo').removeClass( "tipActive", 1000, "easeOutBounce");
                $scope.tipNumWater += 1;
                console.log($scope.tipNumWater);

            }else if($scope.tipNumWater === 4){
                $('#tipFour').addClass( "tipActive", 1000, "easeOutBounce");
                $('#tipThree').removeClass( "tipActive", 1000, "easeOutBounce");
                $scope.tipNumWater = 1;
                console.log($scope.tipNumWater);

            }
        }
        // $interval(tipOne, 5000);
        // $interval(tipTwo, 10000);
        // $interval(tipThree, 15000);
        // $interval(tipFour, 5000);
        // $timeout($scope.tipOne, 2500);
        // $scope.tipOne = function(){
        //     $('#tipOne').addClass( "tipActive", 500, "easeOutBounce");
        //     $('#tipFour').removeClass( "tipActive", 2000, "easeOutBounce");
        //     $timeout(tipTwo, 2500);
        //     console.log('lalala')
        // };
        // var tipTwo = function(){
        //     $('#tipTwo').addClass( "tipActive", 500, "easeOutBounce");
        //             $('#tipOne').removeClass( "tipActive", 2000, "easeOutBounce");
        //     $timeout(tipThree, 2500);
        // };
        // var tipThree = function(){
        //     $('#tipThree').addClass( "tipActive", 1000, "easeOutBounce");
        //             $('#tipTwo').removeClass( "tipActive", 1000, "easeOutBounce");
        //     $timeout(tipFour, 2500);
        // };
        // var tipFour = function(){
        //     $('#tipFour').addClass( "tipActive", 1000, "easeOutBounce");
        //             $('#tipThree').removeClass( "tipActive", 1000, "easeOutBounce");
        // };



        $scope.showHelp = function(){
            $('#helpWaterPage').addClass("helpActive");
        };
        $scope.hideHelp = function(){
            $('#helpWaterPage').removeClass("helpActive");
        };


        /*-----------------SNOW------------------------------*/

        var canvas = document.querySelector('.snowWater'),
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
                ctx.fillStyle = 'rgba(33, 150, 243, 0.4)';
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







}]);
