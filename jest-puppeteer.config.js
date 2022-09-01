const puppeteer = require('puppeteer')

module.exports = {
    launch: {
        headless: false,
        args: [
        //     '--disable-dev-shm-usage',
        //     '--shm-size=3gb',
            '--window-size=1920,1080'],
        devtools: true,
    },
    browserContext: "default",

};  