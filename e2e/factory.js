const { MOBILE_USER_AGENT } = require('./constants');

module.exports = function pageObjectsFactory(object, userAgent) {
    const requiredPO = require(`./${object}`);
    return userAgent === MOBILE_USER_AGENT ? new requiredPO.mobile() : new requiredPO.desktop();
}
