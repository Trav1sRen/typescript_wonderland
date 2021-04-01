const { config } = require('./wdio.shared.conf');

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Pixel_8.1',
        'appium:platformVersion': '8.1',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './apps/taobao.apk',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240
    }
];

exports.config = config;
