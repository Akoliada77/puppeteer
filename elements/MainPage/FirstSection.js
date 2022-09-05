const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

// variables for the section
var sectionSelector = '.styles-module--container--nvzWT'
var titleSelector = '.styles-module--headline--38iHF'
var subtitleSelector = '.styles-module--description--MvEw6.subtitle'
var counterSelector = '.styles-module--countersDirection--OX9c4'
var buttonSelector = '.styles-module--btnContainer--CRr_9'

mainpage = new Mainpage()

export default class FirstSection {
    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async areDirectionCountersDisplayed() {
        expect(await isElementVisible(counterSelector)).to.be.true
    }
    async sectionLocation() {
        const headerSelector = '.styles-module--wrapper__header--18RcT'
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        const headerBox = await(await page.$(headerSelector)).boundingBox()
        expect(sectionBox.y).to.be.greaterThan(headerBox.y)
        expect(sectionBox.y).to.equal(headerBox.y+headerBox.height)
    }
    async sectionContent() {
        expect(await isElementVisible(titleSelector)).to.be.true
        expect(await isElementVisible(subtitleSelector)).to.be.true
        expect(await isElementVisible(counterSelector)).to.be.true
        expect(await isElementVisible(buttonSelector)).to.be.true
    }
    async titleLocation() {
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        // expect(titleBox.y).to.equal(sectionBox.y)
        expect(titleBox.x).to.be.greaterThan(sectionBox.x)
        expect(titleBox.y).to.be.greaterThan(sectionBox.y)
        expect(titleBox.x).to.be.greaterThan(40)
        expect(titleBox.x+titleBox.width).to.be.lessThan(sectionBox.width)
    }
    async titleChanging() {
        let text = await getText(page, titleSelector)
        const but1Selector = '#content > div > div > section.styles-module--container--FSAdL > div.styles-module--containerHeadlineCounters--3aZY7 > div.styles-module--countersDirection--OX9c4 > div:nth-child(1) > div'
        const but1 = await page.$(but1Selector)
        // const href = await (await but1.getProperty('class')).jsonValue()
        console.log(href)
    }
    async subtitleLocation() {
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const subtitleBox = await(await page.$(subtitleSelector)).boundingBox()
        expect(subtitleBox.x).to.be.greaterThan(sectionBox.x)
        expect(subtitleBox.y).to.be.greaterThan(sectionBox.y)
        expect(subtitleBox.x).to.be.equal(titleBox.x)
        expect(subtitleBox.y).to.be.greaterThan(titleBox.y)
    }
    async subtitleChanging() {
        let text = await getText(page, subtitleSelector)
        expect(text).to.be.equal('We will integrate powerful digital tools into your established workflows and help you optimize your operations with Ruby on Rails.')
        await page.waitForTimeout(5000)
        text = await getText(page, subtitleSelector)
        expect(text).to.be.equal('If you are just starting out, we will leverage advanced technology to help you create a new disruptive product.')
        await page.waitForTimeout(5000)
        text = await getText(page, subtitleSelector)
        expect(text).to.be.equal('Rubyroid Labs is a custom software development company working with your ultimate goals in mind.')
        await page.waitForTimeout(5000)
        text = await getText(page, subtitleSelector)
        expect(text).to.be.equal('We will integrate powerful digital tools into your established workflows and help you optimize your operations with Ruby on Rails.')
    }
    async countersLocation() {
        const countersBox = await(await page.$(counterSelector)).boundingBox()
        const titleBox = await(await page.$(titleSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(countersBox.x).to.be.greaterThan(sectionBox.x)
        expect(countersBox.y).to.be.greaterThan(sectionBox.y)
        expect(countersBox.x).to.be.lessThan(50)
    }
    async countersChanging() {
        const counter1Selector = '#content > div > div > section.styles-module--container--FSAdL > div.styles-module--containerHeadlineCounters--3aZY7 > div.styles-module--countersDirection--OX9c4 > div:nth-child(1) > div'
        const counter2Selector = '#content > div > div > section.styles-module--container--FSAdL > div.styles-module--containerHeadlineCounters--3aZY7 > div.styles-module--countersDirection--OX9c4 > div:nth-child(2) > div'
        const counter3Selector = '#content > div > div > section.styles-module--container--FSAdL > div.styles-module--containerHeadlineCounters--3aZY7 > div.styles-module--countersDirection--OX9c4 > div:nth-child(3) > div'
        const counter1 = await page.$(counter1Selector)
        const counter2 = await page.$(counter2Selector)
        const counter3 = await page.$(counter3Selector)
        let classValue = await counter1.getProperty('className')
        expect(classValue._remoteObject.value).to.eq('styles-module--wrapper--1T4Kf styles-module--circleVisible--3ZBB8')
        expect(((await (await page.$(counter2Selector)).getProperty('className')))._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf')
        expect(((await (await page.$(counter3Selector)).getProperty('className')))._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf')
        await page.waitForTimeout(5000)
        classValue = await counter2.getProperty('className')
        expect(classValue._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf styles-module--circleVisible--3ZBB8')
        expect(((await (await page.$(counter1Selector)).getProperty('className')))._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf')
        expect(((await (await page.$(counter3Selector)).getProperty('className')))._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf')
        await page.waitForTimeout(5000)
        classValue = await counter3.getProperty('className')
        expect(classValue._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf styles-module--circleVisible--3ZBB8')
        expect(((await (await page.$(counter1Selector)).getProperty('className')))._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf')
        expect(((await (await page.$(counter2Selector)).getProperty('className')))._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf')
        await page.waitForTimeout(5000)
        classValue = await counter1.getProperty('className')
        expect(classValue._remoteObject.value).to.eq('styles-module--wrapper--1T4Kf styles-module--circleVisible--3ZBB8')
        expect(((await (await page.$(counter2Selector)).getProperty('className')))._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf')
        expect(((await (await page.$(counter3Selector)).getProperty('className')))._remoteObject.value).to.equal('styles-module--wrapper--1T4Kf')
    }
    async buttonLocation() {
        const buttonBox = await(await page.$(buttonSelector)).boundingBox()
        const subtitleBox = await(await page.$(subtitleSelector)).boundingBox()
        const sectionBox = await(await page.$(sectionSelector)).boundingBox()
        expect(buttonBox.x).to.be.greaterThan(sectionBox.x)
        expect(buttonBox.y).to.be.greaterThan(sectionBox.y)
        expect(buttonBox.x).to.be.greaterThan(subtitleBox.x)
        expect(buttonBox.height).to.be.greaterThan(subtitleBox.height)
    }

}