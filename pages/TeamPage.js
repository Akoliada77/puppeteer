import { expect } from "chai"
const { waitForText, shouldNotExist, click, getText, getTextXpath, getCount, typeText, selectText, isElementVisible, isXpathVisible } = require("../lib/helpers")
const { generateID, generateEmail } = require("../lib/utils")
const creds = require ('../creds.json')

// variables for the section
var mainSectionSelector = '.styles-module--imgBlock--SNqRi.styles-module--heightImage--6FZdC'

export default class TeamPage {
    async visit() {
        const url = 'https://rubyroidlabs.dev/team'
        await page.goto(url)
        expect(await isElementVisible(mainSectionSelector)).to.be.true
        expect(page.url()).to.equal(`${url}/`)
    }
}