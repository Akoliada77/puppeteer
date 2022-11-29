const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import WeAreHiring from '../../pages/WeAreHiring'

let wearehiring

// variables for the section    
var titleSelector = '.styles-module--title--48Smu.h1'
var subTitleSelector = '.styles-module--description--gjxa0'
var sectionSelector = '[class="styles-module--wrapper--lJt7I styles-module--container--lWa+u"]'
var secondImageSelector = '.styles-module--img02Container--iblCi'
var firstImageSelector = '.styles-module--img01Container--2m8eW'

wearehiring = new WeAreHiring()

export default class FirstSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionContent() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(subTitleSelector)).to.be.true
        expect(await isElementVisible(firstImageSelector)).to.be.true
        expect(await isElementVisible(secondImageSelector)).to.be.true
    }
}