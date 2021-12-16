const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

export default class Header {
    async checkLocation() {
        const sectionSelector = '.styles-module--header--3iuKV'
        const section = await page.$(sectionSelector)
        const boundingBox = await section.boundingBox()
        expect(boundingBox.y).to.be.equal(0)
    }
    async isSectionDisplayed() {
        const sectionSelector = '.styles-module--header--3iuKV'
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
}