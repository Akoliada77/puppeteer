const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '.styles-module--container--34pZy'
var titleSelector = '.styles-module--title--iIWVh.undefined'
var subtitleSelector = '#content > div > div > section.styles-module--container--34pZy > div.scrollmagic-pin-spacer > div > div > div.styles-module--description--3_XND > p'
var slideSelector = '.styles-module--slideWrapper--1e0Kl.slideWrapper'
var circleButtonSelector = '.styles-module--largeCircleButton--1oaGQ.undefined.styles-module--size--2om9F'
var pointsSelector = '.styles-module--imgBlock--nYMjz'

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
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(subtitleBox.x).to.be.greaterThan(sectionBox.x)
        expect(subtitleBox.y).to.be.greaterThan(sectionBox.y)
        expect(subtitleBox.y).to.be.greaterThan(titleBox.y)
        expect(subtitleBox.x).to.be.greaterThan(titleBox.x)
        expect(subtitleBox.x).to.be.greaterThan(260)
    }
    async subtitleText() {
        const text = await getText(page, subtitleSelector)
        expect(text).to.equal('Business challenges vary depending on the company’s situation. We take these differences into account when providing custom software development solutions. ')
    }
    async sliderLocation() {
        const sliderBox = await(await page.$(slideSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        const subtitleBox = await(await page.$(subtitleSelector)).boundingBox()
        expect(sliderBox.x).to.be.greaterThan(sectionBox.x)
        expect(sliderBox.y).to.be.greaterThan(sectionBox.y)
        expect(sliderBox.y).to.be.greaterThan(subtitleBox.y)
    }
    async amountOfPoints() {
        expect(await getCount(page, pointsSelector)).to.equal(3) 
    }
    
}  