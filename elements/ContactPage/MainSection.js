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
    async
}