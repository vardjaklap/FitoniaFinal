'use strict';

describe('myApp.water module', function() {

  beforeEach(module('myApp.water'));

  describe('Water controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var waterCtrl = $controller('WaterCtrl');
      expect(waterCtrl).toBeDefined();
    }));

  });
});