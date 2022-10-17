const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import OurWork from '../../pages/OurWork'

let ourwork

// variables for the section
var sectionSelector = '.styles-module--wrapper--lJt7I.styles-module--offsetsContainer--5YIuy'
var sortingSelector = '.styles-module--mainSorting--tztbx'
var categoriesSelector = '.styles-module--categoriesList--FJFJd'
var casesBlockSelector = '.styles-module--caseLinkBlock--ITwqD'
var miniCasesBlockSelector = '.styles-module--smallCasesContainer--JJ0Xc'
var buttonHireUsSelector = '.styles-module--button--c44VD'
var sortingItemsSelector = '[role="menuitem"]'
var casesSelector = '.styles-module--link--iV45P'
var miniCasesSelector = '.styles-module--smallCaseTextBlock--iLG3j'



ourwork = new OurWork()

export default class CasesSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionContent() {
        expect(await isElementVisible(categoriesSelector)).to.be.true
        // expect(await isElementVisible(sortingSelector)).to.be.true
        expect(await isElementVisible(casesBlockSelector)).to.be.true
        expect(await isElementVisible(miniCasesBlockSelector)).to.be.true
        expect(await isElementVisible(buttonHireUsSelector)).to.be.true
    }
    async changingSortingButtons () {
        expect(await getText(page, '.styles-module--activeMainSorting--mCezK')).to.eq('Industries')
        // const sortingButtons = await page.$$(sortingItemsSelector)
        // await sortingButtons[2].click()
        await click(page, '#content > div.content > div:nth-child(3) > ul > li:nth-child(3)')
        await click(page, '#content > div.content > div:nth-child(3) > ul > li:nth-child(3)')
        // await page.waitForTimeout(2000)
        expect(await getText(page, '.styles-module--activeMainSorting--mCezK')).to.eq('All')
        // const element = elements.find(element => element.innerHTML === 'All')
        //     if (element) {
        //         element.click()
        //     }
        // await sortingButtons[2].click()
        // expect(await getText(page, '.styles-module--activeMainSorting--mCezK')).to.eq('Services')
    }
    async checkCasesQantity() {
        expect(await getCount(page, casesSelector)).to.eq(12)
    }
    async checkMiniCasesQantity() {
        expect(await getCount(page, miniCasesSelector)).to.eq(15)

    }
    async checkHireUsButtonLocation() {
        const lastMiniCaseBox = await (await page.$('#caseSmall_17')).boundingBox()
        const hireUsButtonBox = await(await page.$(buttonHireUsSelector)).boundingBox()
        expect(hireUsButtonBox.y).to.be.greaterThan(lastMiniCaseBox.y)
    }
    async linkInHireUsButton() {
        const href = await page.$eval('.styles-module--link--mhand', anchor => anchor.getAttribute('href'));
        expect(href).to.eq('/contact')
    }
}