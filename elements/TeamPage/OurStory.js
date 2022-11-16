const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible, getTextFromCertainElement } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import TeamPage from '../../pages/TeamPage'

let teampage

// variables for the section
var sectionSelector = '.styles-module--wrapper--HEp2R.styles-module--containerOffsets--4ubdB'
var titleSelector = '.styles-module--containerOffsets--4ubdB h2'
var textOnTopSelector = '.styles-module--textTop--Rcf+C'
var imageSelector = '.styles-module--image--6cH0i'
var textAtBottomSelector = '.styles-module--textBottom--3CLwz'
var customerLogosSelector = '.styles-module--customerLogos--9RWmC'
var logosSelector = '.styles-module--addedLogoStyles--GdmxX'


teampage = new TeamPage()

export default class OurStory {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }  
    async titleContent() {
        expect(await getText(page, titleSelector)).to.eq('Our story')
    }
    async sectionContent() {
        expect(await isElementVisible(titleSelector)).to.be.true
        // expect(await isElementVisible(textOnTopSelector)).to.be.true
        expect(await isElementVisible(imageSelector)).to.be.true
        expect(await isElementVisible(textAtBottomSelector)).to.be.true
        expect(await isElementVisible(customerLogosSelector)).to.be.true
    }
    async contentLocation() {
        const imageBox = await(await page.$(imageSelector)).boundingBox()
        const textBottomBox = await(await page.$(textAtBottomSelector)).boundingBox()
        const customerLogosBox = await(await page.$(customerLogosSelector)).boundingBox()
        expect(imageBox.y).to.be.lessThan(textBottomBox.y)
        expect(textBottomBox.y).to.be.lessThan(customerLogosBox.y)
    }
    async logosAmount() {
        expect(await getCount(page, logosSelector)).to.eq(5)
    }

}