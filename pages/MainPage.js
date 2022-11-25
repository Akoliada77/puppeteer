import { expect } from "chai"
const { waitForText, shouldNotExist, click, getText, getTextXpath, getCount, typeText, selectText, isElementVisible, isXpathVisible } = require("../lib/helpers")
const { generateID, generateEmail } = require("../lib/utils")
const creds = require ('../creds.json')

// variables for the page
var firstSectionSelector = '.styles-module--containerHeadlineCounters--u51jK'

export default class MainPage {
    async visit() {
        const url = 'https://rubyroidlabs.dev/'
        await page.goto(url)
        expect(await isElementVisible(firstSectionSelector)).to.be.true
        expect(page.url()).to.equal(url)
    }
    async authorization() {
        await page.authenticate({ 
            username: creds["credentials.admin.login"] ,
            password: creds["credentials.admin.password"]
        })
    } 
}