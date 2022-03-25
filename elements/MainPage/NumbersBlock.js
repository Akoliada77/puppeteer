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

}