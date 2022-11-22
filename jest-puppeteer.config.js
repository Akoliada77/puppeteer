const puppeteer = require('puppeteer')

module.exports = {
    launch: {
        headless: true,
        // defaultViewport:{width:1920,height:1080},
        args: [
        //     '--disable-dev-shm-usage',
        //     '--shm-size=3gb',
        // '--window-size=1920,1080'
            ],
        devtools: false,
    },
    browserContext: "default",

};  