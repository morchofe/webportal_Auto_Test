'use strict';


var expect = require('chai').expect;

module.exports = function() {
   this.World = require('../support/world.js').World;
   this.before = require('../support/befor.js').before;


    this.When(/^I type in username and password$/, function (callback) {

        console.log("Typing username....");
        console.log("Typing password....");



       callback();
    });

    this.Then(/^I click on the login button$/, function (callback) {

  //  var title = this.driver.getTitle();

    console.log("displaying home page....");


    this.driver.sleep(200);
    var summaryPageDash = this.driver.findElement({xpath:'.//h2'});
    var title = this.driver.getTitle();
    //console.log(title);
    expect(summaryPageDash.length).to.not.equal(0);
      //  expect(summaryViewTab);
        callback();
    });

    this.Then(/^I go to the home page$/, function (callback) {

    this.driver.manage().timeouts().implicitlyWait(4000);
          this.driver.sleep(6000);
          var summaryPageDash = this.driver.findElement({xpath:'.//h2'});
          var header = this.driver.findElement({xpath:'.//div[3]/div/div[1]'});
          expect(summaryPageDash.length).to.not.equal(0);
          summaryPageDash.click();

          expect(header).to.be.visible;


        callback();

        });
    this.Then(/^I go to the summary page$/, function (callback) {

      //  this.driver.sleep(400);
      var sidebar_nav = this.driver.findElement({id: 'sidebar-nav'});
        var routesTab = this.driver.findElement({xpath: './/div/div/ol/li[2]'});
        var summaryViewPage = this.driver.findElement({xpath: './/div/div/ol/li[1]'});
        var inventoryTab = this.driver.findElement({xpath: './/div/div/ol/li[3]/a/div'});

            this.driver.sleep(6000);
            summaryViewPage.click();
            this.driver.sleep(6000);
            routesTab.click();
            //this.driver.sleep(200);
            this.driver.sleep(5000);
            //inventoryTab.click();
          //  sidebar_nav.click();
        callback();
    });

    this.Then(/^I go to the vehicle reporting page$/, function (callback) {

      //  this.driver.sleep(400);
      var sidebar_nav = this.driver.findElement({id: 'sidebar-nav'});
      var vehicleReport = sidebar_nav.findElement({xpath: './/div/div/ol/li[3]'});

    //  var routesTab = this.driver.findElement({className: 'section-h1'});
      var summaryViewPage = this.driver.findElement({xpath: './/div/div/ol/li[1]'});
      //*[@id="sidebar-nav"]/div/div/ol/li[3]

            this.driver.sleep(1000);
            //summaryViewPage.click();
            this.driver.sleep(2000);
            this.driver.manage().timeouts().implicitlyWait(2000);
            //sidebar_nav.click();
            this.driver.sleep(2000);
            vehicleReport.click();
        callback();
    });
    this.Then(/^I close webportal$/, function (callback) {
        this.driver.manage().timeouts().implicitlyWait(4000);
    //  var logout = this.driver.findElement({xpath: './/ul/li[3]/a'});

          this.driver.sleep(9000);
          this.driver.manage().deleteAllCookies();
          //logout.click();
          //this.driver.sleep(3000);
        //  this.driver.exit();
        callback();
      });



};
