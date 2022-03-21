const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '.styles-module--gridContainer--Zn72u.whyWorkWithUs__gridBlock_height '
var titleSelector = '.styles-module--headline--HXENq'
var subtitleSelector = '#content > div > section:nth-child(4) > div.scrollmagic-pin-spacer > div > div > div.styles-module--description--3KUT5 > p'
var moduleBlockSelector = '.undefined.styles-module--whyWorkWithUsBlock--3GNfC  '
var firstImageSelector = '.styles-module--whyWork1--2SW3q'
var secondImageSelector = '.styles-module--whyWork2--kQmgo'
var thirdImageSelector = '.styles-module--whyWork3--v4CwA'
var fourthImageSelector = '.styles-module--whyWork4--17Sb9'
var fifthImageSelector = '.styles-module--whyWork5--pfbbH'
var sixthImageSelector = '.styles-module--whyWork6--1eqp-'
var seventhImageSelector = '.styles-module--whyWork7--MuQhS'
var eighthImageSelector = '.styles-module--whyWork8--TTfu0'

export default class WhyWorkWithUs {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionlocation() {
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        const devSolutionsSelector = '.styles-module--container--34pZy'
        const devSolutionsBox = await(await page.$(devSolutionsSelector)).boundingBox() 
        expect(sectionBox.y).to.be.greaterThan(devSolutionsBox.y)
    }
    async sectionContent() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(subtitleSelector)).to.be.true
        expect(await isElementVisible(moduleBlockSelector)).to.be.true
        expect(await isElementVisible(firstImageSelector)).to.be.true
        expect(await isElementVisible(secondImageSelector)).to.be.true
        expect(await isElementVisible(thirdImageSelector)).to.be.true
        expect(await isElementVisible(fourthImageSelector)).to.be.true
        expect(await isElementVisible(fifthImageSelector)).to.be.true
        expect(await isElementVisible(sixthImageSelector)).to.be.true
        expect(await isElementVisible(seventhImageSelector)).to.be.true
        expect(await isElementVisible(eighthImageSelector)).to.be.true
    }
    async titleLocation() {
        const titleBox = await (await page.$(titleSelector)).boundingBox()
        const sectionBox = await (await page.$(sectionSelector)).boundingBox()
        expect(titleBox.x).to.be.greaterThan(sectionBox.x)
        expect(titleBox.y).to.be.greaterThan(sectionBox.y)
        expect(titleBox.y).to.be.greaterThan(7485)
        expect(titleBox.x).to.be.lessThan(45)
    }
}