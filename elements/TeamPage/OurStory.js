const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible, getTextFromCertainElement } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import TeamPage from '../../pages/TeamPage'

let teampage

// variables for the section
var sectionSelector = '.styles-module--wrapper--HEp2R.styles-module--containerOffsets--4ubdB'
var titleSelector = '.styles-module--containerOffsets--4ubdB h2'


teampage = new TeamPage()

export default class OurStory {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }  
    async titleContent() {
        expect(await getText(page, titleSelector)).to.eq('Our story')
    }

}