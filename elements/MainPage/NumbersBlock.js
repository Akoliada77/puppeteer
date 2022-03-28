const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '#RRLinNumbers'
var titleSelector = '#RRLinNumbers > div > a'
var infoBlockSelector = '.styles-module--containerInfo--2MYWH'


export default class NumbersBlock {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionContent() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(infoBlockSelector)).to.be.true
    }
    async sectionBackgroundColour() {
        const section = await page.$(sectionSelector)
        let backgroundColour = await page.$eval(sectionSelector, el => getComputedStyle(el).getPropertyValue('background-color'))
        expect(backgroundColour).to.equal('rgb(0, 217, 110)')
    }
    async sectionRedirection() {
        await click(page, sectionSelector)
        expect(await isElementVisible('.styles-module--image--39yWQ.gbi-1666633869-woJHbfYnZ73uYur8XFVBVy')).to.be.true
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/services')
    }
    async titleLocation() {
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(titleBox.x).to.be.greaterThan(sectionBox.x)
        expect(titleBox.y).to.be.greaterThan(sectionBox.y)
        expect(titleBox.x).to.be.lessThan(45)
        expect(titleBox.y).to.be.greaterThan(13578)
    }
}