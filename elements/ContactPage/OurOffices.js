const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Contactpage from '../../pages/ContactPage'

// variables for the section
var sectionSelector = '.styles-module--container--xr8Zs'
var titleSelector = 'div.h1'
var contentSelector = '.styles-module--blockLocation--VBsMj'


export default class OurOffices {

    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async titleContent() {
        expect(await getText(page, titleSelector)).to.eq('Our offices')
    }
    async contentLocation() {
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const contentBox = await(await page.$(contentSelector)).boundingBox() 
        expect(contentBox.y).to.be.greaterThan(titleBox.y)
    }
}