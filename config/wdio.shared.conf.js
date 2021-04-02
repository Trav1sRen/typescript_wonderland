const getLogger = require('@wdio/logger');
export const log = getLogger('Taobao App Testing');

const host = '127.0.0.1';
const port = 4730;

exports.config = {
    runner: 'local',

    host: host,
    port: port,

    logLevel: 'trace',

    reporters: ['allure'],
    reporterOptions: {
        allure: {
            outputDir: './allure-results/'
        }
    },

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: [
        [
            'appium',
            {
                args: {
                    address: host,
                    port: port,
                    relaxedSecurity: true
                },
                command: 'appium'
            }
        ]
    ],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },

    onPrepare: function () {
        log.info('<<< Native App Testing Started >>>');
    },

    afterScenario: function () {
        browser.screenshot();
    },

    onComplete: function () {
        log.info('<<< Testing Finished >>>');
    }
};
