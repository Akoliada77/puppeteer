const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '.styles-module--customerLogos--1wUpb'
var imagesSelector = '#content > div > section.styles-module--container--1XxoU > div.styles-module--customerLogos--1wUpb > div> svg'
var firstImageSelector = '#content > div > section.styles-module--container--1XxoU > div.styles-module--customerLogos--1wUpb > div:nth-child(1) > svg'
var secondImageSelector = '#content > div > section.styles-module--container--1XxoU > div.styles-module--customerLogos--1wUpb > div:nth-child(2) > svg'
var thirdImageSelector = '#content > div > section.styles-module--container--1XxoU > div.styles-module--customerLogos--1wUpb > div:nth-child(3) > svg'
var fourthImageSelector = '#content > div > section.styles-module--container--1XxoU > div.styles-module--customerLogos--1wUpb > div:nth-child(4) > svg'
var fifthImageSelector = '#content > div > section.styles-module--container--1XxoU > div.styles-module--customerLogos--1wUpb > div:nth-child(5) > svg'

export default class CustomerLogos {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionLocation() {
        const sectionBox = await (await page.$(sectionSelector)).boundingBox()
        const firstSectionSelector = '.styles-module--container--FSAdL'
        const firstSectionBox = await(await page.$(firstSectionSelector)).boundingBox()
        expect(sectionBox.y).to.be.greaterThan(firstSectionBox.y)
    }
    async sectionContent() {
        expect(await getCount(page, imagesSelector)).to.equal(5)
    }
    async imagesLocation() {
        const firstImageBox = await(await page.$(firstImageSelector)).boundingBox()
        const secondImageBox = await(await page.$(secondImageSelector)).boundingBox()
        const thirdImageBox = await(await page.$(thirdImageSelector)).boundingBox()
        const fourthImageBox = await(await page.$(fourthImageSelector)).boundingBox()
        const fifthImageBox = await(await page.$(fifthImageSelector)).boundingBox()
        expect(firstImageBox.x).to.be.lessThan(secondImageBox.x)
        expect(firstImageBox.y).to.be.greaterThan(833)
        expect(firstImageBox.y+firstImageBox.height).to.be.lessThan(880)
        expect(secondImageBox.x).to.be.lessThan(thirdImageBox.x)
        expect(secondImageBox.y).to.be.greaterThan(833)
        expect(secondImageBox.y+secondImageBox.height).to.be.lessThan(880)
        expect(thirdImageBox.x).to.be.lessThan(fourthImageBox.x)
        expect(thirdImageBox.y).to.be.greaterThan(833)
        expect(thirdImageBox.y+thirdImageBox.height).to.be.lessThan(880)
        expect(fourthImageBox.x).to.be.lessThan(fifthImageBox.x)
        expect(fourthImageBox.y).to.be.greaterThan(833)
        expect(fourthImageBox.y+fourthImageBox.height).to.be.lessThan(880)
    }
}