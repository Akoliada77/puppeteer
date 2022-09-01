const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Contactpage from '../../pages/ContactPage'

let contactpage

contactpage = new Contactpage()

// variables for the section
var sectionSelector = '.styles-module--wrapper--lJt7I'

export default class MainSection {
    async isSectionDisplayed() {
        expect(await getCount(page, sectionSelector)).to.equal(2)
    }
    
}