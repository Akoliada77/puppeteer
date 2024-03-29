const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '[class="styles-module--gridContainer--AM+X1"]'
var customerLogosSelector = '.styles-module--customerLogos--9RWmC'
var imageSelector = '.gatsby-image-wrapper.gatsby-image-wrapper-constrained.styles-module--teamImage--idIT2'
var titleTextSelector = '.styles-module--blockTitleText--cVdHJ'
var descriptionBlockSelector = '.styles-module--blockDescription--y0IEU'
var serviceBlocksSelector = '.styles-module--customServiceBlock--k0ZYo '
var circleButtonSelector = '.styles-module--largeCircleButton--7nH8Y.undefined.styles-module--size--yGG66'
var rorServiceBlockSelector = '.styles-module--link--3cfyl.styles-module--customService--2tD_P.styles-module--ror_development--2oCKz'
var cwpServiceBlockSelector= '#customService-custom_web_development'

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
        expect(await isElementVisible(titleTextSelector)).to.be.true
        expect(await isElementVisible(descriptionBlockSelector)).to.be.true
        expect(await getCount(page, serviceBlocksSelector)).to.equal(5)
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
        const textBlockBox = await (await page.$(titleTextSelector)).boundingBox()
        expect(textBlockBox.x+textBlockBox.width).to.be.lessThan(imageBlockBox.y)
    }
    async checkThatTextBlockHasText() {
        expect(await getText(page, titleTextSelector)).to.include('Custom software development services')
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
        const titleBlockBox = await(await page.$(titleTextSelector)).boundingBox()
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
    async cwdServiceBlockLocation() {
        const sectionBox = await (await page.$(sectionSelector)).boundingBox()
        const cwpBlockBox = await (await page.$(cwpServiceBlockSelector)).boundingBox()
        const rorBlockBox = await(await page.$(rorServiceBlockSelector)).boundingBox()
        expect(cwpBlockBox.x).to.be.greaterThan(sectionBox.x)
        expect(cwpBlockBox.y).to.be.greaterThan(sectionBox.y)
        expect(cwpBlockBox.y).to.be.greaterThan(rorBlockBox.y)
        expect(cwpBlockBox.x).to.be.greaterThan(430)
    }
    async cwdServiceBlockRedirect() {
        const titleSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--titleContainer--3ac2x > a'
        const href = await (await (await page.$(titleSelector)).getProperty('href')).jsonValue()
        expect(href).to.include('/services/custom_web_development')
        // await click(page, cwpServiceBlockSelector)
        // await page.waitForTimeout(2000)
        // expect(page.url).to.equal('https://new.rubyroidlabs.dev/services/custom_web_development')
    }
    async cwdServiceBlockContent() {
        const imageSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--imageContainer--DYI3k'
        const titleSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--titleContainer--3ac2x'
        const descriptionSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--description--3ETEa'
        expect(await isElementVisible (imageSelector)).to.be.true
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(descriptionSelector)).to.be.true
       
    }
    async imageInCwdBlockLocation() {
        const cwdImageSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--imageContainer--DYI3k'
        const cwdBlockBox = await (await page.$(cwpServiceBlockSelector)).boundingBox()
        const imageBox = await(await page.$(cwdImageSelector)).boundingBox()
        expect(imageBox.x).to.be.greaterThan(cwdBlockBox.x)
        expect(imageBox.y).to.be.greaterThan(cwdBlockBox.y)
        expect(imageBox.x).to.be.greaterThan(460)
        expect(imageBox.y).to.be.greaterThan(1709)
    }
    async titleInCwdBlockLocation(){
        const cwdTitleSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--titleContainer--3ac2x'
        const cwdImageSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--imageContainer--DYI3k'
        const cwdBlockBox = await (await page.$(cwpServiceBlockSelector)).boundingBox()
        const imageBox = await(await page.$(cwdImageSelector)).boundingBox()
        const titleBox = await (await page.$(cwdTitleSelector)).boundingBox()
        expect(titleBox.x).to.be.greaterThan(cwdBlockBox.x)
        expect(titleBox.y).to.be.greaterThan(cwdBlockBox.y)
        expect(titleBox.y).to.be.greaterThan(imageBox.y)
    }
    async titleInCwdBlockText() {
        const cwdTitleSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--titleContainer--3ac2x > a'
        expect(await getText(page, cwdTitleSelector)).to.be.equal('Custom web development')
    }
    async descriptionInCwdBlockText() {
        const cwdDescriptionSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--description--3ETEa'
        expect(await getText(page, cwdDescriptionSelector)).to.be.equal('Take advantage of our expertise in Ruby on Rails, Node.js, React.js, AngularJS, and Vue.js to build a CRM, ERP, E-commerce or any other custom web application.')
    }
    async descriptionInCwdBlockLocation() {
        const cwdTitleSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--titleContainer--3ac2x'
        const cwdDescriptionSelector = '#customService-custom_web_development > div.styles-module--customServiceBlock--3A8Hy > div.styles-module--description--3ETEa'
        const cwdBlockBox = await (await page.$(cwpServiceBlockSelector)).boundingBox()
        const descriptionBox = await(await page.$(cwdDescriptionSelector)).boundingBox()
        const titleBox = await (await page.$(cwdTitleSelector)).boundingBox()
        expect(descriptionBox.x).to.be.greaterThan(cwdBlockBox.x)
        expect(descriptionBox.y).to.be.greaterThan(cwdBlockBox.y)
        expect(descriptionBox.y).to.be.greaterThan(titleBox.y)
    }
}   