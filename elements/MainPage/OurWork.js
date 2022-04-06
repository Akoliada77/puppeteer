const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var titleSelector = '.styles-module--blockTitle--3nNCu'
var casesBlockSelector = '.styles-module--workCases--33hkU.workCase_wrap '
var viewAllCasesSelector = '.styles-module--viewAllCases--38uTf'

export default class OurWork {
    async isSectionDisplayed() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(casesBlockSelector)).to.be.true
    }
    async sectionLocation() {
        const numberBlockBox = await(await page.$('#RRLinNumbers')).boundingBox()
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const casesBox = await(await page.$(casesBlockSelector)).boundingBox()
        const buttonBox = await(await page.$(buttonSelector)).boundingBox()
        console.log(buttonBox)
        expect (titleBox.y).to.be.greaterThan(numberBlockBox.y)
        expect (casesBox.y).to.be.greaterThan(titleBox.y)
        // expect (buttonBox.y).to.be.greaterThan(casesBox.y)
    }
    async sectionContent() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(casesBlockSelector)).to.be.true
        // expect(await isElementVisible(viewAllCasesSelector)).to.be.true
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const casesBox = await(await page.$(casesBlockSelector)).boundingBox()
        // const buttonBox = await(await page.$(buttonSelector)).boundingBox()
        expect(titleBox.x).to.equal(0)
        expect(casesBox.x).to.equal(0)
        expect(titleBox.y).to.equal(14272.0625)
        expect(titleBox.width).to.equal(800)
        expect(casesBox.y).to.equal(14468.0625)
        expect(titleBox.width).to.equal(800)
        // console.log(buttonBox)
    }

}