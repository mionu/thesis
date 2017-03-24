exports.config = {
  framework: 'mocha',
  seleniumServerJar: 'C:\\Users\\Yuliya_Karenik\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\webdriver-manager\\selenium\\selenium-server-standalone-3.3.1.jar',
  specs: ['spec.js'],
  resultJsonOutputFile: 'report.json',
  mochaOpts: {
    timeout: 10000
  },
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
        'args': ['user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4']
    }
  }
}
