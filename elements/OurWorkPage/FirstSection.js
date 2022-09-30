const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import OurWork from '../../pages/OurWork'

let ourwork

// variables for the section
var titleSelector = '.styles-module--titleBlock--fFcCI'
var subTitleSelector = '.styles-module--subTitle--alz9U'


ourwork = new OurWork()

export default class FirstSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(subTitleSelector)).to.be.true
    }
    async titleText () {
        expect(await getText(page, titleSelector)).to.eq('<h1>Our work.</h1>')

    }
    async subTitleText () {
        expect(await getText(page, subTitleSelector)).to.eq('We develop web and mobile applications for startups, established businesses and enterprises.')

    }
}