const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible, getTextFromCertainElement } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import TeamPage from '../../pages/TeamPage'

let teampage

// variables for the section
var sectionSelector = '.styles-module--greenBlock--EHgdl'
var textSelector = '.styles-module--container--oK0U4 div div.h4'

teampage = new TeamPage()

export default class GreenBlock {
    async isSectionDisplayed() {
        await isElementVisible(sectionSelector).to.be.true
    }
    async sectionContent() {
        expect(await getTextFromCertainElement(page, textSelector, 0)).to.eq('We love')
        expect(await getTextFromCertainElement(page, textSelector, 1)).to.eq('We know all about')
        expect(await getTextFromCertainElement(page, textSelector, 2)).to.eq('We help businesses using')
    }   

}