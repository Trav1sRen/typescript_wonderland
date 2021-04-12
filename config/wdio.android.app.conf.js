const { config } = require('./wdio.shared.conf');

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'MX6', // Useless but keep not empty
        'appium:udid': 'M95QACPFFHS8G',
        'appium:platformVersion': '7.1.1',
        'appium:orientation': 'PORTRAIT', // 竖屏模式
        'appium:automationName': 'UiAutomator2',
        'appium:app': './apps/taobao.apk',
        'appium:autoGrantPermissions': true,
        'appium:noReset': true,
        'appium:newCommandTimeout': 240
    }
];

exports.config = config;
