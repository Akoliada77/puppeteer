const puppeteer = require('puppeteer')
const creds = require ('./creds.json') 

module.exports = {
    launch: {
        headless: true,
        defaultViewport: null,
        // viewport: { width: 1920, height: 1080 },
        // args: ['--start-maximized'], 
        // devtools: false,
    },
    browserContext: "default",

};  