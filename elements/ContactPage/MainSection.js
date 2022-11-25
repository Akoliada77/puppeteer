const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible, getTextFromCertainElement } = require('../../lib/helpers')
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
var secondQuestionSelector = '.styles-module--checkboxesBlock--oBuzV.styles-module--visible--Chk5Q '
var buttonsSelector = '.styles-module--button--4JFp1'
var inactive = '::before'
var active = '::after'
var nextButtonSelector = '.styles-module--buttonColor--DAfu3'
var backButtonSelector = '.styles-module--buttonColor--z2Vc8'
var inputBlockSelector = '.styles-module--visible--Chk5Q.styles-module--stepThirdBlock--KdRQH'
var questionTitleSelector = '.styles-module--titleBlock--rmFbV.h4'

export default class MainSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }

    async textOfTitle() {
        expect(await getText(page, sectionTitleSelector)).to.include('Estimate your project')
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
        await click(page, '#content > div > div:nth-child(3) > form > div:nth-child(1) > div:nth-child(1) > div > div > div.styles-module--checkboxesBlock--oBuzV.undefined > div:nth-child(2) > div:nth-child(1) > label')
        await click(page, '#content > div.content > div:nth-child(3) > form > div:nth-child(1) > div:nth-child(1) > div > div > div.styles-module--checkboxesBlock--oBuzV.undefined > div.styles-module--buttons--DTLNk > div > button')
        // let buttons = await page.$$(buttonsSelector)
        // await buttons[0].click()
        await page.waitForTimeout(1000)
        expect(await isElementVisible(secondQuestionSelector)).to.be.true
        expect(await isElementVisible(backButtonSelector)).to.be.true
        await click(page, '#content > div > div:nth-child(3) > form > div:nth-child(1) > div:nth-child(2) > div > div > div.styles-module--checkboxesBlock--oBuzV.styles-module--visible--Chk5Q > div.styles-module--buttons--DTLNk > div > button > div')
        await page.waitForSelector(inputBlockSelector).catch(e => e)
        // expect(await isElementVisible(inputBlockSelector)).to.be.true
    } 
    async questonTitles() {
        expect(await getTextFromCertainElement(page, questionTitleSelector, 0)).to.eq('What are you looking for?')
        expect(await getTextFromCertainElement(page, questionTitleSelector, 1)).to.eq('What additional services you may need?')
    }
}