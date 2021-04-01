/**
 * WebdriverIO config file to run tests on native mobile apps.
 * Config file helps us configure all the settings and setup environments
 * to run our tests.
 */

const host = '127.0.0.1'; // default appium host
const port = 4730; // default appium port

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {
    debug: false,
    reporters: ['allure'],
    reporterOptions: {
        allure: {
            outputDir: './allure-results/'
        }
    },

    host: host,
    port: port,

    maxInstances: 1,

    capabilities: [
        {
            appiumVersion: '1.8.1', // Appium module version
            browserName: '', // browser name is empty for native apps
            platformName: 'Android',
            app: './app/LGCalculator.apk', // Path to your native app
            appPackage: 'com.android.calculator2', // Package name of your app
            appActivity: 'com.android.calculator2.Calculator', // App activity of the app
            platformVersion: '7.1.1', // Android platform version of the device
            deviceName: 'THF755e0384', // device name of the mobile device
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 60000
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
    }
};
