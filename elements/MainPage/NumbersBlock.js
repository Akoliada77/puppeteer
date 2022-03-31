const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

// variables for the section
var sectionSelector = '#RRLinNumbers'
var titleSelector = '#RRLinNumbers > div > a'
var infoBlockSelector = '.styles-module--containerInfo--2MYWH'
var entrieTitles = '.styles-module--number--3s3Mz.h2'
var entrieTexts = '.styles-module--text--12fMj.styles-module--fontStyle--3jBt6'


export default class NumbersBlock {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async sectionContent() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(infoBlockSelector)).to.be.true
    }
    async sectionBackgroundColour() {
        const section = await page.$(sectionSelector)
        let backgroundColour = await page.$eval(sectionSelector, el => getComputedStyle(el).getPropertyValue('background-color'))
        expect(backgroundColour).to.equal('rgb(0, 217, 110)')
    }
    async sectionRedirection() {
        await click(page, sectionSelector)
        expect(await isElementVisible('.styles-module--image--39yWQ.gbi-1666633869-woJHbfYnZ73uYur8XFVBVy')).to.be.true
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/services')
    }
    async titleLocation() {
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(titleBox.x).to.be.greaterThan(sectionBox.x)
        expect(titleBox.y).to.be.greaterThan(sectionBox.y)
        expect(titleBox.x).to.be.lessThan(45)
        expect(titleBox.y).to.be.greaterThan(13578)
    }
    async titleText() {
        const text = await getText(page, titleSelector)
        expect(text).to.eq('Rubyroid Labs in numbers')
    }
    async infoBlockLocation() {
        const infoBlockBox = await(await page.$(infoBlockSelector)).boundingBox()
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(infoBlockBox.x).to.be.greaterThan(sectionBox.x)
        expect(infoBlockBox.y).to.be.greaterThan(sectionBox.y)
        expect(infoBlockBox.y).to.be.greaterThan(titleBox.y)
        expect(infoBlockBox.x).to.be.greaterThan(43)
        expect(infoBlockBox.x+infoBlockBox.width).to.be.lessThan(757)
    }
    async infoBlockContent() {
        expect(await getCount(page, entrieTitles)).to.eq(4)
        expect(await getCount(page, entrieTexts)).to.eq(4)
    }
    async entriesTitleContent() {
        const entrieTitleList = await page.$$(entrieTitles)
        const firstText = await (await entrieTitleList[0].getProperty('innerText')).jsonValue()
        expect(firstText).to.eq('$200k +')
        const secondtText = await (await entrieTitleList[1].getProperty('innerText')).jsonValue()
        expect(secondtText).to.eq('73.58')
        const thirdText = await (await entrieTitleList[2].getProperty('innerText')).jsonValue()
        expect(thirdText).to.eq('2-4 years')
        const fourthText = await (await entrieTitleList[3].getProperty('innerText')).jsonValue()
        expect(fourthText).to.eq('$500m +')
    }
    async entriesTextsContent() {
        
    }
}