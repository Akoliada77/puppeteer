const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Contactpage from '../../pages/ContactPage'

// variables for the section
var sectionSelector = '.styles-module--gridContainer--S2oyR'
var emailSelector = '.styles-module--email--qs944'
var titleSelector = '.styles-module--title--ADNIE'
var socialLinksSelector = '.styles-module--links--YebAu'


export default class GridContainerContact {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }

    async correctEmailDisplayed() {
        await page.waitForSelector(emailSelector)
        // expect(await getText(page, emailSelector)).to.include('href="mailto:hi@rubyroidlabs.com"')
        const text = await page.$eval(emailSelector, element => element.innerHTML)
        expect(text).to.include('href="mailto:hi@rubyroidlabs.com"')
    }
    async checkSocialLinks() {
        const linksContent = await page.$eval(socialLinksSelector, element => element.innerHTML)
        expect(linksContent).to.include('<a href="https://www.linkedin.com/company/rubyroid-labs" rel="nofollow">linkedin</a>')
        expect(linksContent).to.include('<a href="https://twitter.com/RubyroidLabs" rel="nofollow">twitter</a>')
        expect(linksContent).to.include('<a href="https://www.facebook.com/rubyroidlabs" rel="nofollow">facebook</a>')
        expect(linksContent).to.include('<a href="https://www.youtube.com/channel/UCVMhNTgjF6jTeTmX-DXvQBw" rel="nofollow">youtube</a>')
    }
    async 
}