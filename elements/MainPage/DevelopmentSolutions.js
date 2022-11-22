const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '[class="styles-module--container--+DUeJ"]'
var sectionXpath = '//*[@id="content"]/div[2]/section[2]'
var titleSelector = '.styles-module--wrapper--3-Zzo div'
var subtitleSelector = 'div.styles-module--description--Mgq-b > p'
var slideSelector = '.slideWrapper'
var circleButtonSelector = '.styles-module--size--e7SzK'
var pointsSelector = '.styles-module--imgBlock--nMiVK'
var pointTitlesSelector = '.slideContainer > div h3'
var pointDescriptionsSelector = '.styles-module--sectionParagraph--VPmM1'

export default class DevelopmentSolutions {
    async isSectionDisplayed() {
        // expect(await isElementVisible('//*[@id="content"]/div[2]/section[2]')).to.be.true
        await page.waitForXPath(sectionXpath)
    }
    async sectionLocation() {
        const gridContainerSelector = '[class="styles-module--gridContainer--AM+X1"]' 
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
        expect(await getText(page, titleSelector)).to.include('Development solutions based on your business situation')
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
    async sliderScrollsHorizontally() {
        // page.$eval('.styles-module--headline--3a34r', (el) => el.scrollIntoView())
        page.$eval('#RRLinNumbers', (el) => el.scrollIntoView())
        await page.waitForTimeout(1000)
        const slider = await page.$('#content > div > section.styles-module--container--34pZy > div.scrollmagic-pin-spacer > div > div > div.styles-module--slideContainer--tea2U.slideContainer')
        const href = await (await slider.getProperty('style')).jsonValue()
        console.log(href)

    } 
    async pointTitlesLocation() {
        expect(await getCount(page, pointTitlesSelector)).to.equal(3)
        const pointsBox = await (await page.$(pointsSelector)).boundingBox()
        const pointTitlesBox = await(await page.$(pointTitlesSelector)).boundingBox()
        expect(pointTitlesBox.y).to.be.greaterThan(pointsBox.y)
    }
    async pointDescriptionsLocation() { 
        expect(await getCount(page, pointTitlesSelector)).to.equal(3)
        const descriptionsBox = await (await page.$(pointDescriptionsSelector)).boundingBox()
        const pointTitlesBox = await(await page.$(pointTitlesSelector)).boundingBox()
        expect(descriptionsBox.y).to.be.greaterThan(pointTitlesBox.y)
    }


}  