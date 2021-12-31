const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

// variables for the section
var sectionSelector = '.styles-module--container--FSAdL'
var titleSelector = '.styles-module--title--iIWVh.styles-module--headline--38iHF'
var subtitleSelector = '.styles-module--description--2S0yz.subtitle'
var counterSelector = '.styles-module--countersDirection--OX9c4'
var buttonSelector = '.styles-module--btnContainer--CRr_9'

mainpage = new Mainpage()

export default class FirstSection {
    async isSectionDisplayed() {
        const section = '.styles-module--containerHeadlineCounters--3aZY7'
        expect(await isElementVisible(section)).to.be.true
    }
    async areDirectionCountersDisplayed() {
        const counters = '.styles-module--countersDirection--OX9c4'
        expect(await isElementVisible(counters)).to.be.true
    }
    async sectionLocation() {
        const headerSelector = '.styles-module--wrapper__header--18RcT'
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        const headerBox = await(await page.$(headerSelector)).boundingBox()
        expect(sectionBox.y).to.be.greaterThan(headerBox.y)
        expect(sectionBox.y).to.equal(headerBox.y+headerBox.height)
    }
    async sectionContent() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(subtitleSelector)).to.be.true
        expect(await isElementVisible(counterSelector)).to.be.true
        expect(await isElementVisible(buttonSelector)).to.be.true
    }
}