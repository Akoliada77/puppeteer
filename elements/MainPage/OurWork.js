const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var titleSelector = '.styles-module--blockTitle--3nNCu'
var casesBlockSelector = '.styles-module--workCases--33hkU.workCase_wrap '
var viewAllCasesSelector = '#content > div > section:nth-child(6) > div.styles-module--viewAllCases--38uTf > a'
var casesSelector = '.styles-module--workCaseCard--1BsUh.workCaseCard__visible'
var caseCategoryTitlesSelector = '.styles-module--categoryTitle--1Vkc9.workCaseCard__visible_title'
var caseImagesSelector = '.styles-module--imageContainer--13Uvg'
var caseTitlesSelector = '.styles-module--caseTitle--EV173.h5'
var caseDescriptionsSelector = '.styles-module--caseDescription--3TMMa'
var caseRecordsSelector = '.styles-module--recordDescription--1bpaj'

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
    async amountOfCases() {
        expect(await getCount(page, casesSelector)).to.equal(7)
    }
    async casesAreLocatedHorrizontally() {
        const firstCaseBox = await(await page.$('#caseCard-0')).boundingBox()
        const secondCaseBox = await(await page.$('#caseCard-1')).boundingBox()
        const thirdCaseBox = await(await page.$('#caseCard-2')).boundingBox()
        const fourthCaseBox = await(await page.$('#caseCard-3')).boundingBox()
        const fifthCaseBox = await(await page.$('#caseCard-4')).boundingBox()
        const sixthCaseBox = await(await page.$('#caseCard-5')).boundingBox()
        const seventhCaseBox = await(await page.$('#caseCard-6')).boundingBox()
        expect(firstCaseBox.x).to.equal(40)
        expect(firstCaseBox.x).to.lessThan(secondCaseBox.x)
        expect(secondCaseBox.x).to.lessThan(thirdCaseBox.x)
        expect(thirdCaseBox.x).to.lessThan(fourthCaseBox.x)
    }
    async casesContent() {
        expect(await getCount(page, caseCategoryTitlesSelector)).to.equal(7)
        expect(await getCount(page, caseImagesSelector)).to.equal(7)
        expect(await getCount(page, caseTitlesSelector)).to.equal(7)
        expect(await getCount(page, caseDescriptionsSelector)).to.equal(7)
        expect(await getCount(page, caseRecordsSelector)).to.equal(11)

    }
    async firstCaseRedirect() {
        // const cases = await page.$$(casesSelector)
        const caseSelector = '#caseCard-0'
        await click(page, caseSelector)
        await page.waitForTimeout(2000)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/case_study/automotive')
    }
    async secondCaseRedirect() {
        // const cases = await page.$$(casesSelector)
        const caseSelector = '#caseCard-1'
        await click(page, caseSelector)
        await page.waitForTimeout(2000)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/case_study/travel')
    }
    async thirdCaseRedirect() {
        // const cases = await page.$$(casesSelector)
        const caseSelector = '#caseCard-2'
        await click(page, caseSelector)
        await page.waitForTimeout(2000)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/case_study/crm')
    }
    async fourthCaseRedirect() {
        // const cases = await page.$$(casesSelector)
        const caseSelector = '#caseCard-3'
        await click(page, caseSelector)
        await page.waitForTimeout(2000)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/case_study/e_commerce')
    }
    async fifthCaseRedirect() {
        // const cases = await page.$$(casesSelector)
        const caseSelector = '#caseCard-4'
        await click(page, caseSelector)
        await page.waitForTimeout(2000)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/case_study/real_estate')
    }
    async sixthCaseRedirect() {
        // const cases = await page.$$(casesSelector)
        const caseSelector = '#caseCard-5'
        await click(page, caseSelector)
        await page.waitForTimeout(2000)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/case_study/marketing')
    }
    async seventhCaseRedirect() {
        // const cases = await page.$$(casesSelector)
        const caseSelector = '#caseCard-6'
        await click(page, caseSelector)
        await page.waitForTimeout(2000)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/case_study/fintech')
    }
    async casesAreActive() {
        const activeCase = '.styles-module--workCaseCard--1BsUh.styles-module--hovering--3jp9E.styles-module--caseCardId0--1t7xc.workCaseCard__visible'
        const firstCase = '#caseCard-0'
        await shouldNotExist(page, activeCase)
        await page.hover(firstCase)
        expect(await isElementVisible(activeCase)).to.be.true
    }
    async buttonLocation() {
        const buttonBox = await(await page.$(viewAllCasesSelector)).boundingBox()
        const casesBlockBox = await(await page.$(casesBlockSelector)).boundingBox()
        expect(buttonBox.y).to.be.greaterThan(casesBlockBox.y)
    }

}