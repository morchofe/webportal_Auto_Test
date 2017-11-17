'use strict';


var expect = require('chai').expect;
var http = require('http');
var request = require("request");

module.exports = function() {
  this.World = require('../support/world.js').World;

this.When(/^I am on the software$/, function (callback) {
  var softwarePage = this.driver.get("http://test.gtt-web-portal.com/api/software");
  this.driver.manage().timeouts().implicitlyWait(6000);
  expect(softwarePage.length).to.not.equal(0);
       callback();
     });

this.Then(/^I exit the api$/, function (callback) {
       this.driver.get("http://test.gtt-web-portal.com");
       this.driver.manage().timeouts().implicitlyWait(1000);
       this.driver.sleep(6000);
       var logout = this.driver.findElement({xpath: './/ul/li[3]/ul/li[2]/a'});

           this.driver.sleep(6000);
           logout.click();
           this.driver.sleep(3000);

            callback();

     });


     this.Then(/^I get a json response of all software$/, function (callback) {
       // Write code here that turns the phrase above into concrete actions
       var softwareList = this.driver.findElement({xpath:'./html/body/pre'});
      expect(softwareList.length).to.not.equal(0);
       callback();
     });
     var url =  'http://test.gtt-web-portal.com/api/software';

     http.get(url, function(res){
         var body = '';
         //console.log("This is the output: ", res);

         res.on('data', function(chunk){
             body += chunk;
         });

         res.on('end', function(){
             var fbResponse = JSON.parse(body);
             //console.log("Got a response: ", fbResponse.picture);
         });
     }).on('error', function(e){
           console.log("Got an error: ", e);
     });

  /*   function get(software){
          var url2 = "http://test.gtt-web-portal.com/api/software";

     request({
         url2: url2,
         json: true
     }, function (error, response, body) {

         if (!error && response.statusCode === 200) {
             console.log("2nd printout", body);// Print the json response
         }
     });
   }
   */
};
