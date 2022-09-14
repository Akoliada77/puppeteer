const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Contactpage from '../../pages/ContactPage'

let contactpage

contactpage = new Contactpage()

// variables for the section
var sectionSelector = '.content'
var sectionTitleSelector = '.styles-module--titleBlock--fFcCI'
var sectionSubTitleSelector = '.styles-module--subTitle--alz9U'
var firstQuestionSelector = '.styles-module--formLine--aVckh'
var buttonsSelector = '.styles-module--block--wIsB1'
var inactive = '::before'
var active = '::after'
var nextButtonSelector = '.styles-module--buttonColor--DAfu3'
var backButtonSelector = '.styles-module--buttonColor--z2Vc8'
var inputBlockSelector = '.styles-module--visible--Chk5Q.styles-module--stepThirdBlock--KdRQH'


export default class MainSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }

    async textOfTitle() {
        expect(await getText(page, sectionTitleSelector)).to.include('Estimate your project.')
    }
    async textOfSubtitles() {
        expect(await getText(page, sectionSubTitleSelector)).to.equal('Please fill in the form and our team will contact you in 24 business hours to help with the next steps.')
    }
    async firstQuestionIsDisplayed() {
        expect(await isElementVisible(firstQuestionSelector)).to.be.true
    }
    async buttonsInFirstQuestion() {
        let firstButtonSelector = '.styles-module--label--rzKQ8'
        expect(await getCount(page, buttonsSelector)).to.equal(15)
        console.log(firstButtonSelector+inactive)
        // expect(await isElementVisible(firstButtonSelector+inactive)).to.be.true
    }
    async showingResults() {
        // const linkHandlers = await page.$x("//a[contains(text(), 'dedicated developer')]")
        // console.log(linkHandlers)
        // let button = await page.evaluate(() => {
        //     [...document.querySelectorAll('.styles-module--label--rzKQ8')].find(element => element.outerHTML === 'dedicated developer')
        //   })
        // console.log(button)
        // if (buttonsSelector.length > 0) {
        //     await buttonsSelector[0].click()
        //   } else {
        //     throw new Error("Link not found")
        //   }
        // await shouldNotExist(page,)
        // await click(page, nextButtonSelector)
        let buttons = await page.$$(buttonsSelector)
        await buttons[0].click()
        await shouldNotExist(page, backButtonSelector)
        let nextButton = await page.$(nextButtonSelector)
        await nextButton.click()
        expect(await isElementVisible(backButtonSelector)).to.be.true
        await nextButton.click()
        // expect(await isElementVisible(inputBlockSelector)).to.be.true
    }
}