'use strict';


var expect = require('chai').expect;

module.exports = function() {
    this.World = require('../support/world.js').World;
   this.before = require('../support/befor.js').before;


this.When(/^I am on the home page$/, function (callback) {
         var summaryViewPage = this.driver.findElement({xpath: './/div/div/ol/li[1]'});
         var header = this.driver.findElement({xpath:'.//div[3]/div/div[1]'});

           console.log("At home page again.");
           expect(header).to.be.visible;




           callback();
       });


       this.Then(/^I click on the summary link$/, function (callback) {

             //  sidebar_nav.click();
               console.log("Summary page link is clicked.");
           callback();
       });

       this.Then(/^the summary page display$/, function (callback) {

         console.log("displaying Summary page.");

     callback();
       });

};
