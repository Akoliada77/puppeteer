const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import OurWork from '../../pages/OurWork'

let ourwork

// variables for the section
var sectionSelector = '.styles-module--wrapper--HEp2R.styles-module--containerOffsets--gdODk'


ourwork = new OurWork()

export default class CasesSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
}