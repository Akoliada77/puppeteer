const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import TeamPage from '../../pages/TeamPage'

let ourwork

// variables for the section
var titleSelector = '.styles-module--title--dsH4E'
var subTitleSelector = '.styles-module--subTitle--alz9U'

ourwork = new TeamPage()

export default class FirstSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(subTitleSelector)).to.be.true
    }

}