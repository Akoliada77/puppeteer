import { expect } from "chai"
const { waitForText, shouldNotExist, click, getText, getTextXpath, getCount, typeText, selectText, isElementVisible, isXpathVisible } = require("../lib/helpers")
const { generateID, generateEmail } = require("../lib/utils")
const creds = require ('../creds.json')

// variables for the section
var casesSectionSelector = '.styles-module--wrapper--lJt7I.styles-module--offsetsContainer--5YIuy'

export default class OurWork {
    async visit() {
        const url = 'https://rubyroidlabs.dev/case-study/'
        await page.goto(url)
        expect(await isElementVisible(casesSectionSelector)).to.be.true
        expect(page.url()).to.equal(url)
    }
}