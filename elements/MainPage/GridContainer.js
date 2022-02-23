const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '.styles-module--gridContainer--3dAwj'
var customerLogosSelector = '.styles-module--customerLogos--1wUpb'
var imageSelector = '.gatsby-image-wrapper.gatsby-image-wrapper-constrained.styles-module--teamImage--pX2kk'
var textBlockSelector = '.styles-module--blockTitleText--3N-Ze'
var descriptionBlockSelector = '.styles-module--blockDescription--dTCz4'
var serviceBlocksSelector = '.styles-module--customServiceBlock--3A8Hy'
var circleButtonSelector = '.styles-module--largeCircleButton--1oaGQ.undefined.styles-module--size--1GVWm'
var descriptionBlockSelector = '.styles-module--blockDescription--dTCz4'
var rorServiceBlockSelector = '.styles-module--link--3cfyl.styles-module--customService--2tD_P.styles-module--ror_development--2oCKz'

export default class GridContainer {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionLocation() {
        const customerLogosBox = await(await page.$(customerLogosSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(sectionBox.y).to.be.greaterThan(customerLogosBox.y)
    }
    async sectionContent() {
        expect(await isElementVisible(imageSelector)).to.be.true
        expect(await isElementVisible(textBlockSelector)).to.be.true
        expect(await isElementVisible(descriptionBlockSelector)).to.be.true
        expect(await getCount(page, serviceBlocksSelector)).to.equal(6)
        expect(await isElementVisible(circleButtonSelector)).to.be.true
    }
    async imageLocation() {
        const imageBox = await(await page.$(imageSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(imageBox.x).to.be.greaterThan(sectionBox.x)
        expect(imageBox.x).to.be.greaterThan(430)
        expect(imageBox.y).to.be.greaterThan(sectionBox.y)
        expect(imageBox.y).to.be.lessThan(985)
    }
    async imageBlockHasImage() {
        const imageSelector1 = '[alt="team image"]'
        const src = await (await (await page.$(imageSelector1)).getProperty('src')).jsonValue()
        expect(src).to.include('team-main.png')
    }
    async textBlockLocation() {
        const imageBlockBox = await (await page.$(imageSelector)).boundingBox()
        const textBlockBox = await (await page.$(textBlockSelector)).boundingBox()
        expect(textBlockBox.x+textBlockBox.width).to.be.lessThan(imageBlockBox.y)
    }
    async checkThatTextBlockHasText() {
        expect(await getText(page, textBlockSelector)).to.include('Custom software development services')
    }
    async descritionBlockContent() {
        const descriptionImageSelector = '#content > div > section.styles-module--container--1XxoU > div.styles-module--gridContainer--3dAwj > div > div.styles-module--blockDescription--dTCz4 > svg'
        const descriptiontTextSelector = '.styles-module--textCenter--2Xb_m '
        expect(await isElementVisible(descriptionBlockSelector)).to.be.true
        expect(await isElementVisible(descriptionImageSelector)).to.be.true
        expect(await isElementVisible(descriptiontTextSelector)).to.be.true
        const blockBox = await(await page.$(descriptionBlockSelector)).boundingBox()
        const imageBox = await(await page.$(descriptionImageSelector)).boundingBox()
        const textBox = await(await page.$(descriptiontTextSelector)).boundingBox()
        expect(imageBox.x).to.be.greaterThan(blockBox.x)
        expect(imageBox.y).to.be.greaterThan(blockBox.y)
        expect(textBox.x).to.be.greaterThan(blockBox.x)
        expect(textBox.y).to.be.greaterThan(blockBox.y)
    }
    async descriptionBlockLocation() {
        const descriptionBlockBox = await(await page.$(descriptionBlockSelector)).boundingBox()
        const imageBlockBox = await(await page.$(imageSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(descriptionBlockBox.y).to.be.greaterThan(imageBlockBox.y)
        expect(descriptionBlockBox.x+descriptionBlockBox.width).to.be.lessThan(sectionBox.x+sectionBox.width)
        expect(descriptionBlockBox.y).to.be.greaterThan(1364)
    }
    async rorServiceBlockLocation() {
        const rorServiceBlockBox = await(await page.$(rorServiceBlockSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        const titleBlockBox = await(await page.$(textBlockSelector)).boundingBox()
        expect(rorServiceBlockBox.x).to.be.greaterThan(sectionBox.x)
        expect(rorServiceBlockBox.x).to.be.lessThan(43)
        expect(rorServiceBlockBox.y).to.be.greaterThan(titleBlockBox.y)
        expect(rorServiceBlockBox.y).to.be.greaterThan(1442)
    }
    async rorSeviceBlockContent() {
        const imageSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--imageContainer--DYI3k'
        const imageLinkSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--imageContainer--DYI3k > img'
        const titleSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--titleContainer--3ac2x'
        const descriptionSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--description--3ETEa'
        const src = await (await (await page.$(imageLinkSelector)).getProperty('src')).jsonValue()
        expect(src).to.include('min.svg')
        expect(await isElementVisible(imageSelector)).to.be.true
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(descriptionSelector)).to.be.true
    }
    async rorServiceBlockRedirection() {
        const containerSelector = '#customService-ror_development'
        await click(page, containerSelector)
        expect(await isElementVisible('.styles-module--container--QpE7y')).to.be.true
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/services/')
    }
    async imageOfRorBlockLocation() {
        const rorBlockSelector = '#customService-ror_development'
        const imageSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--imageContainer--DYI3k'
        const rorBlockBox = await(await page.$(rorBlockSelector)).boundingBox()
        const imageBox = await(await page.$(imageSelector)).boundingBox()
        expect(imageBox.x).to.be.greaterThan(rorBlockBox.x)
        expect(imageBox.y).to.be.greaterThan(rorBlockBox.y)
    }
    async titleOfRorBlockLocation() {
        const titleSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--titleContainer--3ac2x'
        const imageSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--imageContainer--DYI3k'
        const rorBlockSelector = '#customService-ror_development'
        const rorBlockBox = await(await page.$(rorBlockSelector)).boundingBox()
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const imageBox = await(await page.$(imageSelector)).boundingBox()
        expect (titleBox.y).to.be.greaterThan(imageBox.y)
        expect (imageBox.x).to.be.greaterThan(rorBlockBox.x)
        expect (imageBox.y).to.be.greaterThan(rorBlockBox.y)
    }
    async titleText() {
        const titleSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--titleContainer--3ac2x > a'
        expect(await getText(page, titleSelector)).to.be.equal('Ruby on Rails development')
    }
    async descriptionLocation() {
        const descriptionSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--description--3ETEa'
        const imageSelector = '#customService-ror_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--imageContainer--DYI3k'
        const rorServiceBlockSelector = '#customService-ror_development'
        const descriptionBox = await(await page.$(descriptionSelector)).boundingBox()
        const imageBox = await(await page.$(imageSelector)).boundingBox()
        const rorBLockBox = await(await page.$(rorServiceBlockSelector)).boundingBox()
        expect(descriptionBox.y).to.be.greaterThan(imageBox.y)
        expect(descriptionBox.x).to.be.greaterThan(rorBLockBox.x)
        expect(descriptionBox.y).to.be.greaterThan(rorBLockBox.y)
    }
    async descriptionText() {
        const descriptionXpath = '//*[@id="customService-ror_development"]/div[1]/div[3]/text()'
        expect(await getTextXpath(page, descriptionXpath)).to.equal('Launch, scale, and upgrade with our full-cycle Ruby and Ruby on Rails development services.') 
    }
    async cwpServiceBlockLocation() {
        
    }
}   