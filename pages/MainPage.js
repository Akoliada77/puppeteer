import { expect } from "chai"
const { waitForText, shouldNotExist, click, getText, getTextXpath, getCount, typeText, selectText, isElementVisible, isXpathVisible } = require("../lib/helpers")
const { generateID, generateEmail } = require("../lib/utils")
const creds = require ('../creds.json')


export default class MainPage {
    async visit() {
        const firstSection = '#cursorCirclePhoto-0'
        await page.goto('https://new.rubyroidlabs.dev/')
        expect(await isElementVisible(firstSection)).to.be.true
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/')
    }

}