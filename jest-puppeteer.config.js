const puppeteer = require('puppeteer')

module.exports = {
    launch: {
        headless: true,
        args: [
        //     '--disable-dev-shm-usage',
        //     '--shm-size=3gb',
        // '--window-size=1920,1080'
            ],
        devtools: false,
    },
    browserContext: "default",

};  