const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '.styles-module--gridContainer--Zn72u.whyWorkWithUs__gridBlock_height '
var titleSelector = '.styles-module--title--iIWVh.styles-module--headlineText--2tw0u'
var subtitleSelector = ''

export default class WhyWorkWithUs {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
}