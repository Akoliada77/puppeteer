const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import OurWork from '../../pages/OurWork'

let ourwork

// variables for the section
var sectionSelector = '.styles-module--wrapper--lJt7I.styles-module--offsetsContainer--5YIuy'
var sortingSelector = '.styles-module--mainSorting--tztbx'
var categoriesSelector = '.styles-module--categoriesList--FJFJd'
var casesSelector = '.styles-module--caseLinkBlock--ITwqD'
var miniCasesSelector = '.styles-module--smallCasesContainer--JJ0Xc'
var buttonHireUsSelector = '.styles-module--button--c44VD'
var sortingItemsSelector = '[role="menuitem"]'


ourwork = new OurWork()

export default class CasesSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionContent() {
        expect(await isElementVisible(categoriesSelector)).to.be.true
        expect(await isElementVisible(sortingSelector)).to.be.true
        expect(await isElementVisible(casesSelector)).to.be.true
        expect(await isElementVisible(miniCasesSelector)).to.be.true
        expect(await isElementVisible(buttonHireUsSelector)).to.be.true
    }
    async changingSortingButtons () {
        expect(await getText(page, '.styles-module--activeMainSorting--mCezK')).to.eq('Industries')
        // const sortingButtons = await page.$$(sortingItemsSelector)
        // await sortingButtons[0].click()
        const element = elements.find(element => element.innerHTML === 'All')
            if (element) {
                element.click()
            }
        // expect(await getText(page, '.styles-module--activeMainSorting--mCezK')).to.eq('All')
        // await sortingButtons[2].click()
        // expect(await getText(page, '.styles-module--activeMainSorting--mCezK')).to.eq('Services')
    }
}