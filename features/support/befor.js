'use strict';
var expect = require('chai').expect;

module.exports = function() {
    this.World = require('../support/world.js').World;


    var before = function () {
        this.driver.get("http://test.gtt-web-portal.com");
        this.driver.manage().timeouts().implicitlyWait(100);
        this.driver.sleep(6000);
        var userEmail = this.driver.findElement({xpath: './/div[2]/div/div/form/div[1]/input'});
        userEmail.sendKeys("userAdmin@gtt.com");
        var userPassword = this.driver.findElement({xpath: './/div[2]/div/div/form/div[2]/input'});
        userPassword.sendKeys("Webportal1");
        //driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        var login = this.driver.findElement({xpath: './/div[2]/div/div/form/button'});
        login.click();
      };
        module.exports = before;
    };
