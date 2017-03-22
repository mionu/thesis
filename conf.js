exports.config = {
  framework: 'mocha',
  seleniumServerJar: 'C:\\Users\\Yuliya_Karenik\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\webdriver-manager\\selenium\\selenium-server-standalone-3.3.1.jar',
  specs: ['spec.js'],
  resultJsonOutputFile: 'report.json',
  mochaOpts: {
    timeout: 10000
  }
}
