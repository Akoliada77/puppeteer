import { expect } from "chai"
const { waitForText, shouldNotExist, click, getText, getTextXpath, getCount, typeText, selectText, isElementVisible, isXpathVisible } = require("../lib/helpers")
const { generateID, generateEmail } = require("../lib/utils")
const creds = require ('../creds.json')


export default class ContactPage {
    async visit() {
        const titleSelector = '.styles-module--titleBlock--fFcCI'
        const url = 'https://rubyroidlabs.dev/contact'
        await page.goto(url)
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(page.url()).to.equal(url+'/')
    }

}