const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Contactpage from '../../pages/ContactPage'

let gridcontainer

gridcontainer = new GridContainer()

// variables for the section
var sectionSelector = '.styles-module--gridContainer--S2oyR'
var emailSelector = '.styles-module--email--qs944'
var titleSelector = '.styles-module--title--ADNIE'
var socialLinksSelector = '.styles-module--socialLinks--ASVSL'


export default class GridContainer{
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }

    async correctEmailDisplayed() {
        expect(await getText(page, emailSelector)).to.eq('hi@rubyroidlabs.com')
    }
}