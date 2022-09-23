const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Contactpage from '../../pages/ContactPage'

// variables for the section
var sectionSelector = '.styles-module--container--xr8Zs'
var titleSelector = 'div.h1'
var contentSelector = '.styles-module--blockLocation--VBsMj'
var officesSelector = '.styles-module--addressBlock--E0zXs'
var imageSelector = '.gatsby-image-wrapper.gatsby-image-wrapper-constrained.styles-module--image--nOF7d'


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
    async checkAmountOfOffices() {
        expect(await getCount(page, officesSelector)).to.eq(2)
    }
    async imageIsDisplayed() {
        expect(await isElementVisible(imageSelector)).to.be.true
    }
    async imageLocation() {
        const officesBox = await(await page.$(officesSelector)).boundingBox()
        const imageBox = await(await page.$(imageSelector)).boundingBox()   
        expect(imageBox.x).to.be.greaterThan(officesBox.x)
    }
}