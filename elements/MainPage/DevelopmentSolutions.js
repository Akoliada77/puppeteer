const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '.styles-module--container--34pZy'
var titleSelector = '.styles-module--title--iIWVh.undefined'
var subtitleSelector = '.styles-module--subTitle--1ToGn'
var slideSelector = '.styles-module--slideWrapper--1e0Kl.slideWrapper'
var circleButtonSelector = '.styles-module--largeCircleButton--1oaGQ.undefined.styles-module--size--2om9F'

export default class DevelopmentSolutions {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionLocation() {
        const gridContainerSelector = '.styles-module--container--1XxoU' 
        const gridContainerBox = await (await page.$(gridContainerSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(sectionBox.y).to.greaterThan(gridContainerBox.y)
        expect(sectionBox.y).to.greaterThan(gridContainerBox.y+gridContainerBox.height)
    }
    async sectionContent() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(subtitleSelector)).to.be.true
        expect(await isElementVisible(slideSelector)).to.be.true
        expect(await isElementVisible(circleButtonSelector)).to.be.true
    }
    async titleLocation() {
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(titleBox.x).to.be.greaterThan(sectionBox.x)
        expect(titleBox.y).to.be.equal(sectionBox.y)
    }
    async titleText() {
        expect(await getText(page, titleSelector)).to.equal('Development solutions based on your business situation')
    }
    async subtitleLocation() {
        const subtitleBox = await(await page.$(subtitleSelector)).boundingBox()
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        expect()
    }
}