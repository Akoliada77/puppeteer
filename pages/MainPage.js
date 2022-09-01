import { expect } from "chai"
const { waitForText, shouldNotExist, click, getText, getTextXpath, getCount, typeText, selectText, isElementVisible, isXpathVisible } = require("../lib/helpers")
const { generateID, generateEmail } = require("../lib/utils")
const creds = require ('../creds.json')


export default class MainPage {
    async visit() {
        const firstSection = '.styles-module--containerHeadlineCounters--3aZY7'
        const url = 'https://rubyroidlabs.dev/'
        await page.goto(url, {waitUntil : 'networkidle2' })
        expect(await isElementVisible(firstSection)).to.be.true
        expect(page.url()).to.equal(url)
    }
    async authorization() {
        await page.authenticate({ 
            username: creds["credentials.admin.login"] ,
            password: creds["credentials.admin.password"]
        })
    } 
}