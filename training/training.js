'use strict';

angular.module('myApp.training', ['ngRoute'])


    .controller('TrainingCtrl', ['$scope','$interval', '$timeout',function($scope, $interval, $timeout) {

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

            $scope.addArms = function(){
                $('#bodarms').addClass('activeBod');
            };
            $scope.removeArms = function(){
             $('#bodarms').removeClass('activeBod');
            };
        $scope.addLegs = function(){
            $('#bodleg').addClass('activeBod');
        };
        $scope.removeLegs = function(){
            $('#bodleg').removeClass('activeBod');
        };
        $scope.addBack = function(){
            $('#bodback').addClass('activeBod');
        };
        $scope.removeBack = function(){
            $('#bodback').removeClass('activeBod');
        };
        $scope.addCore = function(){
            $('#bodcore').addClass('activeBod');
        };
        $scope.removeCore = function(){
            $('#bodcore').removeClass('activeBod');
        };

        var canvas = document.querySelector('.snowTraining'),
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
                ctx.fillStyle = 'rgba(199, 120, 0, 0.4)';
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
            $('#helpTrainingPage').addClass("helpActive");
        };
        $scope.hideHelp = function(){
            $('#helpTrainingPage').removeClass("helpActive");
        };

        $scope.showCardio = function(){
            $('#cardioEx').addClass("helpActive");
        };
        $scope.showArms = function(){
            $('#armsEx').addClass("helpActive");
        };
        $scope.showCore = function(){
            $('#coreEx').addClass("helpActive");
        };
        $scope.showBack = function(){
            $('#backEx').addClass("helpActive");
        };
        $scope.showLegs = function(){
            $('#legsEx').addClass("helpActive");
        };
        $scope.showStretch = function(){
            $('#stretchEx').addClass("helpActive");
        };
        $scope.hideCardio = function(){
            $('#cardioEx').removeClass("helpActive");
            console.log('heheh')
        };
        $scope.hideArms = function(){
            $('#armsEx').removeClass("helpActive");
            console.log('heheh')
        };
        $scope.hideCore = function(){
            $('#coreEx').removeClass("helpActive");
            console.log('heheh')
        };
        $scope.hideBack = function(){
            $('#backEx').removeClass("helpActive");
            console.log('heheh')
        };
        $scope.hideLegs = function(){
            $('#legsEx').removeClass("helpActive");
            console.log('heheh')
        };
        $scope.hideStretch = function(){
            $('#stretchEx').removeClass("helpActive");
            console.log('heheh')
        };
    }]);