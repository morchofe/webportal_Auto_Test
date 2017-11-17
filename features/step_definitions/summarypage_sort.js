'use strict';


var expect = require('chai').expect;

module.exports = function() {
    this.World = require('../support/world.js').World;
   this.before = require('../support/befor.js').before;



          this.Then(/^I sort by route$/, function (callback) {
            this.driver.manage().timeouts().implicitlyWait(4000);

              var summaryReport = this.driver.findElement({xpath:'.//div/div/ol/li[1]/a'});
              var routeSort = this.driver.findElement({xpath:'.//div[3]/div/table[1]/thead/tr/th[2]'});
              this.driver.sleep(6000);
              //summaryReport.click();
              this.driver.sleep(6000);
              routeSort.click();

            callback();
          });


          this.Then(/^I sort by direction$/, function (callback) {

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
