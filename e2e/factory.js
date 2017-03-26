const { DESKTOP_USER_AGENT, MOBILE_USER_AGENT } = require('./constants');

module.exports = function pageObjectsFactory(object, userAgent) {
    const requiredPO = require(`./e2e/${object}`);
    return userAgent === DESKTOP_USER_AGENT ? new requiredPO.desktop() : new requiredPO.mobile();
}
