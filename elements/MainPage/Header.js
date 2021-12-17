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
    async checkSectionContent() {
        const logoSelector = '.styles-module--logo--3Gocn'
        const rorButtonSelector = '.styles-module--linkRor--TEgXa.styles-module--link--ZNrzI'
        const contactButtonSelector = '.styles-module--link--ZNrzI'
        const burgerMenuSelector = '.styles-module--button--2i6R4'
        expect(await isElementVisible(logoSelector)).to.be.true
        expect(await isElementVisible(rorButtonSelector)).to.be.true
        expect(await isElementVisible(contactButtonSelector)).to.be.true
        expect(await isElementVisible(burgerMenuSelector)).to.be.true
    }
    async logoLocation() {
        const logoSelector = '.styles-module--logo--3Gocn'
        const logo = await page.$(logoSelector)
        const boundingBox = await logo.boundingBox()
        expect(boundingBox.x).to.be.lessThan(42)
        expect(boundingBox.y).to.be.lessThan(25)
    }
    async logoRedirecting() {
        const logoSelector = '.styles-module--logo--3Gocn'
        const firstSectionSelector = '.styles-module--containerHeadlineCounters--3aZY7'
        await click(page, logoSelector)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/')
        expect(await isElementVisible(firstSectionSelector)).to.be.true
    }
}