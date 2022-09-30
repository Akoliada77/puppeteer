const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import OurWork from '../../pages/OurWork'

let ourwork

// variables for the section
var titleSelector = '.styles-module--titleBlock--fFcCI'
var subTitleSelector = '.styles-module--wrapper--lJt7I '


ourwork = new OurWork()

export default class FirstSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(subTitleSelector)).to.be.true
    }
    

}