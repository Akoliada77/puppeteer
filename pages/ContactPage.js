import { expect } from "chai"
const { waitForText, shouldNotExist, click, getText, getTextXpath, getCount, typeText, selectText, isElementVisible, isXpathVisible } = require("../lib/helpers")
const { generateID, generateEmail } = require("../lib/utils")
const creds = require ('../creds.json')


export default class ContactPage {
    async visit() {
        const mainSection = '.styles-module--titleBlock--fFcCI'
        const url = 'https://rubyroidlabs.dev/contact'
        await page.goto(url, {waitUntil : 'networkidle2' })
        expect(await isElementVisible(mainSection)).to.be.true
        expect(page.url()).to.equal(url)
    }

}