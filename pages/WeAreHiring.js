import { expect } from "chai"
const { waitForText, shouldNotExist, click, getText, getTextXpath, getCount, typeText, selectText, isElementVisible, isXpathVisible } = require("../lib/helpers")
const { generateID, generateEmail } = require("../lib/utils")
const creds = require ('../creds.json')

//variables for the page 
var titleSelector = '.styles-module--title--48Smu.h1'
var sectionSelector = '[class="styles-module--wrapper--lJt7I styles-module--container--lWa+u"]'

export default class WeAreHiring {
    async visit() {
        const url = 'https://rubyroidlabs.dev/careers'
        await page.goto(url)
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(sectionSelector)).to.be.true
        expect(page.url()).to.equal(`${url}/`)
    }

}