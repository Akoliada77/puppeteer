const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible, getTextFromCertainElement } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import TeamPage from '../../pages/TeamPage'

let teampage

// variables for the section
var sectionSelector = '.styles-module--wrapper--HEp2R.styles-module--containerOffsets--4ubdB'


teampage = new TeamPage()

export default class OurStory {
    async isSectionDisplayed() {
        await isElementVisible(sectionSelector).to.be.true
    }  

}