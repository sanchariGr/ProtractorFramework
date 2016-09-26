exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],

  allScriptsTimeout: 6000,
  onPrepare: function(){
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1280,760);
  },

  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true
    }

};