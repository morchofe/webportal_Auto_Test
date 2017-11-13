'use strict';

var expect = require('chai').expect;

module.exports = function() {
    this.World = require('../support/world.js').World;

        this.Then(/^I go to the intersection page$/, function (callback) {
           var intersectionViewTab = this.driver.findElement({xpath: './/*[@id="root"]/div/div[2]/div[2]/div[1]/button[2]'});
            intersectionViewTab.click();
           callback();
        });

    this.When(/^I click on the calendar$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var intersectionCalendar = this.driver.findElement({id: '//*[@id="root"]/div/div/div[2]/div/div[3]/div/div/span'});
        intersectionCalendar.click();
        callback();
    });

    this.Then(/^I select weekdays$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var calendarWeekdays = this.driver.findElement({id: '//*[@id="root"]/div/div[2]/div[2]/div[3]/div[2]/div/div[4]/div/div[2]/div[4]/div[2]/div[2]/input'});
        calendarWeekdays.click();
        callback();
    });

    this.Then(/^I select weekends$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var calendarWeekend = this.driver.findElement({id: '//*[@id="root"]/div/div[2]/div[2]/div[3]/div[2]/div/div[4]/div/div[2]/div[4]/div[2]/div[3]/input'});
        calendarWeekend.click();
        callback();
    });

    this.Then(/^I select all days$/, function (callback) {
        var calendarAll = this.driver.findElement({id: '//*[@id="root"]/div/div[2]/div[2]/div[3]/div[2]/div/div[4]/div/div[2]/div[4]/div[2]/div[1]/input'});
        calendarAll.click();
        callback();
    });

    this.When(/^I click on the Vehicles fire$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    this.Then(/^I select all vehicles$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.When(/^I click on the Vehicles$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    this.Then(/^I unselect police and Ambulance$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^All intersections will display$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^I click on the LEGEND$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    this.When(/^I uncheck Other Intersection$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    this.Then(/^I uncheck Stop Sign$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    this.Then(/^only Opticom intersection will display$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

};
