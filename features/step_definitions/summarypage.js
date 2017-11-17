'use strict';


var expect = require('chai').expect;

module.exports = function() {
    this.World = require('../support/world.js').World;
   this.before = require('../support/befor.js').before;


this.When(/^I am on the home page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions

           console.log("At home page again.");


                 //*[@id="summary-dashboard"]/h2/text()

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
