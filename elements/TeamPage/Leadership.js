const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible, getTextFromCertainElement } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import TeamPage from '../../pages/TeamPage'

let teampage

// variables for the section
var sectionSelector = '.styles-module--containerOffsets--lVhCK'
var titleSelector = '.styles-module--titleBlock--kLSvS'
var leadersSelector = '.styles-module--leaderBlock--gYkNB'


teampage = new TeamPage()

export default class Leadership {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async titleText() {
        expect(await getText(page, titleSelector)).to.eq('Leadership')
    }
    async leadersAmount() {
        expect(await getCount(page, leadersSelector)).to.eq(3)
    }

}