'use strict';


var expect = require('chai').expect;

module.exports = function() {
    this.World = require('../support/world.js').World;
    this.before = require('../support/befor.js').before;

          this.Then(/^I sort by route$/, function (callback) {
            var sidebar_nav = this.driver.findElement({id: 'sidebar-nav'});
            var vehicleReport = sidebar_nav.findElement({xpath: './/div/div/ol/li[3]'});

            var routesSort = this.driver.findElement({xpath: './/div[3]/div/table[1]/thead/tr/th[2]'});
            var summaryViewPage = this.driver.findElement({xpath: './/div/div/ol/li[1]'});


                  this.driver.manage().timeouts().implicitlyWait(6000);
                  //sidebar_nav.click();
                  this.driver.sleep(2000);
                //  vehicleReport.click();
                  this.driver.sleep(2000);
                  summaryViewPage.click();
                  this.driver.manage().timeouts().implicitlyWait(6000);
                  routesSort.click();
            console.log("by .....0");

            callback();
          });


          this.Then(/^I sort by direction$/, function (callback) {
            var directionSort = this.driver.findElement({xpath: './/div[3]/div/table[1]/thead/tr/th[3]'});


                  this.driver.manage().timeouts().implicitlyWait(6000);
                  //sidebar_nav.click();
                  this.driver.sleep(2000);
                //  vehicleReport.click();
                  this.driver.sleep(2000);
                  this.driver.manage().timeouts().implicitlyWait(6000);
                  directionSort.click();



            console.log("by .....1");
            callback();
          });


          this.Then(/^I sort by on time$/, function (callback) {
            console.log("by .....2");
            callback();
          });


          this.Then(/^I sort by Early trip$/, function (callback) {
            console.log("by .....3");
            callback();
          });


          this.Then(/^I sort by Late trip$/, function (callback) {
            console.log("by .....4");
            callback();
          });



          this.Then(/^I sort by trip count$/, function (callback) {
            console.log("by .....5");
            callback();
          });



          this.Then(/^I sort by dwell time$/, function (callback) {
            console.log("by .....6");
            callback();
          });


          this.Then(/^I sort by travel time$/, function (callback) {
            console.log("by .....7");
            callback();
          });


          this.Then(/^I sort by duration$/, function (callback) {
            console.log("by .....8");
            callback();
          });

};
