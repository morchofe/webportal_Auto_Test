# Webportal Automated Testing in JavaScript with Cucumber-JS and Selenium-Webdriver


This is an example project using cucumber-js and selenium-webdriver to run browser-based automated tests, in both desktop Chrome and Chrome on Android.


The tests is executed in Chrome and so you'll need Chrome and the Chromedriver executable on your path. If you're running the tests on Android, you'll need an Android device with Chrome installed. All the JavaScript is linted using jshint before the tests are run (using options specified in the Gruntfile). If any scenarios fail, a screenshot will be taken as a PNG and put in ./screenshots/. After each scenario all cookies are deleted (in the context of the page the browser is displaying at the time) and after the tests are finished Cucumber shuts down the Webdriver instance.

## Running the tests on the desktop

To get going, you'll need Chrome (or Chromium) installed, and you'll also need the Chromedriver executable available on your path. You can get Chromedriver from [here](http://chromedriver.storage.googleapis.com/index.html) and then, in Linux, you can add the directory to your path like this:

    export PATH=$PATH:~/path/to/directory/containing/chromedriver

Verify it is working by opening a terminal and typing 'chromedriver'. You should see:

    [me@computer ~]$ chromedriver
    Starting ChromeDriver (v2.10) on port 9515
    Only local connections are allowed.

If all seems OK, Ctrl+C to get rid of that, and carry on:

    git clone https://github.com/morchofe/webportal_Auto_Test.git
    cd webportal_Auto_Test   
    npm install
    node_modules/grunt-cli/bin/grunt


  ********Run tests**************
  from directory webportal_Auto_Test 
  
  ./ node_modules/grunt-cli/bin/grunt

Which should first use jshint to lint the step definitions (options are specified in the Gruntfile.js), and then run the tests, producing output that looks something like:

    [webportal_Auto_Test]$ grunt

Running "jshint:all" (jshint) task
>> 11 files lint free.

Running "exec:run_cucumber_tests" (exec) task
Feature: Login to Webportal

  As an fire chief user
  In order to find out more about runs
  I want to be able to access webportal for my city

  @login
  Scenario: Login to webportal
Typing username....
Typing password....
    When I type in username and password
displaying home page....
    Then I click on the login button
    Then I go to the home page
    Then I go to the summary page
    Then I go to the vehicle reporting page
Got a response:  undefined

Feature: Analyze summary page

  As an fire chief user
  In order to find out more about runs
  I want to be able to analyze the summary page

  @login
  Scenario: Click on the summary page
At home page again.
    When I am on the home page
Summary page link is clicked.
    Then I click on the summary link
displaying Summary page.
    Then the summary page display

Feature: Analyze api

  As an developer
  I want to be able to unit test all api

  Scenario: access api
    When I am on the software
    Then I get a json response of all software

 

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

###Run just one tag example @login###
- Change Grunt.js as below
jshint: {
      all: ['Gruntfile.js', 'features/step_definitions/*.js', 'features/support/*.js'],
      options: {
        node: true,
        strict: true,
        globalstrict: true,
	tags: grunt.option('cucumbertags')
      }
    },

    exec: {
      run_cucumber_tests: {
        command: 'node ' + path.join('node_modules', 'cucumber',  'bin', 'cucumber.js') + ' -f pretty -t @login'
      }
    },

---- Then run command (grunt exec:run_cucumber_tests)

*******OR*******************************************************
- Change Grunt.js as below
jshint: {
      all: ['Gruntfile.js', 'features/step_definitions/*.js', 'features/support/*.js'],
      options: {
        node: true,
        strict: true,
        globalstrict: true,
	tags: grunt.option('cucumbertags')
      }
    },

    exec: {
      run_cucumber_tests: {
        command: 'node ' + path.join('node_modules', 'cucumber',  'bin', 'cucumber.js') + ' -f pretty -t @' + grunt.option('test')
      }
    },
------ AND RUN command (grunt exec:run_cucumber_tests --test=testin)


## Running the tests on an Android device

I've only tried this with a physical device, but it should work with the emulator with some small changes.

To get started, connect an Android device to your computer via USB and ensure USB debugging is turned on. You might need to authorise the computer on the phone before anything will work.

If you haven't done so already, ensure you've got the project and installed dependencies:

    git clone https://github.com/morchofe/webportal_Auto_Test.git
    cd webportal_Auto_Test   
    npm install

This will install Appium, but you'll need to start the server (it's probably best to do this in a separate terminal):

    node_modules/appium/bin/appium.js

Once that has started successfully, then try running the test:

   
    [webportal_Auto_Test] $ grunt android
    Running "jshint:all" (jshint) task
>> 11 files lint free.

Running "exec:run_cucumber_tests" (exec) task
Feature: Login to Webportal

  As an fire chief user
  In order to find out more about runs
  I want to be able to access webportal for my city

  @login
  Scenario: Login to webportal
Typing username....
Typing password....
    When I type in username and password
displaying home page....
    Then I click on the login button
    Then I go to the home page
    Then I go to the summary page
    Then I go to the vehicle reporting page

All done!
