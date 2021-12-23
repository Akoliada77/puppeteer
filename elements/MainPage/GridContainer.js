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
}