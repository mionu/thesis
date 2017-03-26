const { DESKTOP_USER_AGENT, MOBILE_USER_AGENT } = require('./e2e/constants');

const date = new Date().toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
}).split('/').join('');

exports.config = {
    baseUrl: 'http://www.zappos.com/',
    framework: 'mocha',
    seleniumServerJar: 'bin\\selenium-server-standalone-3.3.1.jar',
    specs: ['e2e/**/*.spec.js'],
    resultJsonOutputFile: `e2e\\reports\\report-${date}.json`,
    restartBrowserBetweenTests: true,
    chromeDriver: 'bin\\chromedriver_2.28.exe',
    mochaOpts: {
        timeout: 20000
    },
    multiCapabilities: [{
        browserName: 'chrome',
        name: 'Desktop',
        chromeOptions: {
            args: [`user-agent=${DESKTOP_USER_AGENT}`]
        },
    }, {
        browserName: 'chrome',
        name: 'Mobile',
        chromeOptions: {
            args: [`user-agent=${MOBILE_USER_AGENT}`]
        },
    }]
}
