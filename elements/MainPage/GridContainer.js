const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

export default class GridContainer {
    async isSectionDisplayed() {
        const sectionSelector = '.styles-module--gridContainer--3dAwj'
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionLocation() {
        const sectionSelector = '.styles-module--gridContainer--3dAwj'
        const customerLogosSelector = '.styles-module--customerLogos--1wUpb'
        const customerLogosBox = await(await page.$(customerLogosSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(sectionBox.y).to.be.greaterThan(customerLogosBox.y)
    }
    async sectionContent() {
        const imageSelector = '#content > div > div > section.styles-module--container--1XxoU > div.styles-module--gridContainer--3dAwj > div > div.gatsby-image-wrapper.styles-module--teamImage--pX2kk > picture > img'
        const textBlockSelector = '.styles-module--blockTitleText--3N-Ze'
        const descriptionBlockSelector = '.styles-module--blockDescription--dTCz4'
        const serviceBlocksSelector = '.styles-module--customServiceBlock--3A8Hy'
        const circleButtonSelector = '.styles-module--largeCircleButton--1oaGQ.undefined.styles-module--size--1GVWm'
        expect(await isElementVisible(imageSelector)).to.be.true
        expect(await isElementVisible(textBlockSelector)).to.be.true
        expect(await isElementVisible(descriptionBlockSelector)).to.be.true
        expect(await getCount(page, serviceBlocksSelector)).to.equal(6)
        expect(await isElementVisible(circleButtonSelector)).to.be.true
    }
    async imageLocation() {
        const imageSelector = '.gatsby-image-wrapper.styles-module--teamImage--pX2kk'
        const imageBox = await(await page.$(imageSelector)).boundingBox()
        const sectionSelector = '.styles-module--gridContainer--3dAwj'
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(imageBox.x).to.be.greaterThan(sectionBox.x)
        expect(imageBox.x).to.be.greaterThan(430)
        expect(imageBox.y).to.be.greaterThan(sectionBox.y)
        expect(imageBox.y).to.be.lessThan(980)
    }
    async imageBlockHasImage() {
        const imageSelector = '[alt="team image"]'
        const src = await (await (await page.$(imageSelector)).getProperty('src')).jsonValue()
        expect(src).to.include('team.png')
    }
    async textBlockLocation() {
        const textBlockSelector = '.styles-module--blockTitleText--3N-Ze'
        const imageBlockSelector = '.gatsby-image-wrapper.styles-module--teamImage--pX2kk'
        const imageBlockBox = await (await page.$(imageBlockSelector)).boundingBox()
        const textBlockBox = await (await page.$(textBlockSelector)).boundingBox()
        expect(textBlockBox.x+textBlockBox.width).to.be.lessThan(imageBlockBox.y)
    }
    async checkThatTextBlockHasText() {
        const textBlockSelector = '.styles-module--blockTitleText--3N-Ze'    
        const textSelector = '.styles-module--title--1CEMO'
        const textBlockBox = await (await page.$(textBlockSelector)).boundingBox()
        const textBox = await(await page.$(textSelector)).boundingBox()
        expect(await getText(page, textSelector)).to.equal('Custom software development services')
        expect(textBox.x).to.equal(textBlockBox.x)
        expect(textBox.y).to.be.greaterThan(textBlockBox.y)
        expect(textBlockBox.height).to.be.greaterThan(textBox.height)
    }
    async descritionBlockContent() {
        const blockSelector = '.styles-module--blockDescription--dTCz4'
        const imageSelector = '#content > div > div > section.styles-module--container--1XxoU > div.styles-module--gridContainer--3dAwj > div > div.styles-module--blockDescription--dTCz4 > svg'
        const textSelector = '.styles-module--textCenter--2Xb_m '
        expect(await isElementVisible(blockSelector)).to.be.true
        expect(await isElementVisible(imageSelector)).to.be.true
        expect(await isElementVisible(textSelector)).to.be.true
        const blockBox = await(await page.$(blockSelector)).boundingBox()
        const imageBox = await(await page.$(imageSelector)).boundingBox()
        const textBox = await(await page.$(textSelector)).boundingBox()
        expect(imageBox.x).to.be.greaterThan(blockBox.x)
        expect(imageBox.y).to.be.greaterThan(blockBox.y)
        expect(textBox.x).to.be.greaterThan(blockBox.x)
        expect(textBox.y).to.be.greaterThan(blockBox.y)
    }
    async descriptionBlockLocation() {
        const descriptionBlockSelector = '.styles-module--blockDescription--dTCz4'
        const imageBlockSelector = '.gatsby-image-wrapper.styles-module--teamImage--pX2kk'
        const sectionSelector = '.styles-module--gridContainer--3dAwj'
        const descriptionBlockBox = await(await page.$(descriptionBlockSelector)).boundingBox()
        const imageBlockBox = await(await page.$(imageBlockSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(descriptionBlockBox.y).to.be.greaterThan(imageBlockBox.y)
        expect(descriptionBlockBox.x+descriptionBlockBox.width).to.be.lessThan(sectionBox.x+sectionBox.width)
        expect(descriptionBlockBox.y).to.be.greaterThan(1364)
    }
}