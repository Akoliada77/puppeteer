const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Mainpage from '../../pages/MainPage'

let mainpage

mainpage = new Mainpage()

export default class Header {
    async headerLocation() {
        const sectionSelector = '.styles-module--header--3iuKV'
        const section = await page.$(sectionSelector)
        const boundingBox = await section.boundingBox()
        expect(boundingBox.y).to.be.equal(0)
    }
    async isSectionDisplayed() {
        const sectionSelector = '.styles-module--header--3iuKV'
        expect(await isElementVisible(sectionSelector)).to.be.true
    }
    async checkSectionContent() {
        const logoSelector = '.styles-module--logo--3Gocn'
        const rorButtonSelector = '.styles-module--linkRor--TEgXa.styles-module--link--ZNrzI'
        const contactButtonSelector = '.styles-module--link--ZNrzI'
        const burgerMenuSelector = '.styles-module--button--2i6R4'
        expect(await isElementVisible(logoSelector)).to.be.true
        expect(await isElementVisible(rorButtonSelector)).to.be.true
        expect(await isElementVisible(contactButtonSelector)).to.be.true
        expect(await isElementVisible(burgerMenuSelector)).to.be.true
    }
    async logoLocation() {
        const logoSelector = '.styles-module--logo--3Gocn'
        const logo = await page.$(logoSelector)
        const boundingBox = await logo.boundingBox()
        expect(boundingBox.x).to.be.lessThan(42)
        expect(boundingBox.y).to.be.lessThan(25)
    }
    async logoRedirection() {
        const logoSelector = '.styles-module--logo--3Gocn'
        const firstSectionSelector = '.styles-module--containerHeadlineCounters--3aZY7'
        await click(page, logoSelector)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/')
        expect(await isElementVisible(firstSectionSelector)).to.be.true
    }
    async rorButtonHover() {
        const rorSelector = '.styles-module--linkRor--TEgXa.styles-module--link--ZNrzI'
        const rorElement = await page.$(rorSelector)
        const data = await page.evaluate(() => {
            const element = document.body.getElementsByTagName('.styles-module--linkRor--TEgXa.styles-module--link--ZNrzI')
            return [...element].map(el => {
                el.focus()
                return window.getComputedStyle(element).getPropertyValue('margin-right')
            })
          })
          console.log(data)
    }
    async rorLinkRedirect(){
        const rorLink = await page.$('.styles-module--linkRor--TEgXa.styles-module--link--ZNrzI')
        const href = await (await rorLink.getProperty('href')).jsonValue()
        expect(href).to.equal('https://new.rubyroidlabs.dev/')
        const rorLinkSelector2 = '#content > div > header > div > header > div.styles-module--navigation--2vh3P > div.styles-module--nav--2gL6i > div:nth-child(1) > a'
        await click(page, rorLinkSelector2)
        await page.waitForTimeout(2000)
        // await page.waitForNavigation()
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/')
    }
    async contactLinkRedirect(){
        const contactLinkSelector = await page.$('.styles-module--link--1BKwL')
        const href = await (await contactLinkSelector.getProperty('href')).jsonValue();
        expect(href).to.equal('https://new.rubyroidlabs.dev/contact')
        const contactLinkSelector2 = ('#content > div > header > div > header > div.styles-module--navigation--2vh3P > div.styles-module--nav--2gL6i > div.styles-module--link--ZNrzI > a')
        await click(page, contactLinkSelector2)
        await page.waitForNavigation()
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/contact')
    }
    async contactUsArrowToTheRight() {
        const contactUsXpath= '//*[@id="content"]/div/header/div/header/div[2]/div[1]/div[2]/a/span/text()'
        const arrowSelector = '#content > div > header > div > header > div.styles-module--navigation--2vh3P > div.styles-module--nav--2gL6i > div.styles-module--link--ZNrzI > a > svg'
        const contactBoundingBox = await (await page.waitForXPath(contactUsXpath)).boundingBox()
        const arrowBoundingBox = await(await page.$(arrowSelector)).boundingBox()
        expect(contactBoundingBox.x).to.be.lessThan(arrowBoundingBox.x)
    }
    async burgerMenuLocation() {
        const burgerSelector = '.styles-module--button--2i6R4'
        const burgerBoundingBox = await(await page.$(burgerSelector)).boundingBox()
        expect(burgerBoundingBox.x).to.be.greaterThan(710)
        expect(burgerBoundingBox.y).to.be.lessThan(30)
    }
    async burgerMenuOpening() {
        const burgerSelector = '.styles-module--button--2i6R4' 
        const menuHiddenSeletor = '.styles-module--menu--1Hjqu.styles-module--hidden--2Lebr'
        const menuVisibleSelector = '.styles-module--menu--1Hjqu'
        // expect(await isElementVisible(menuHiddenSeletor)).to.be.false
        await shouldNotExist(page, menuVisibleSelector)
        expect(await isElementVisible(menuVisibleSelector)).to.be.false
        await click(page, burgerSelector)
        expect(await isElementVisible(menuVisibleSelector)).to.be.true
    }
    async modalWindowContent() {
        const logoSelector = '.styles-module--logo--3Gocn'
        const linksSelector = '.styles-module--mainNavigation--29RGU'
        const contactUsLinkSelector = '.styles-module--leftArrowButton--3G3oW.styles-module--innerNav__link--3WDhj'
        expect(await getCount(page, linksSelector)).to.equal(5)
        expect(await isElementVisible(logoSelector)).to.be.true 
        expect(await isElementVisible(contactUsLinkSelector)).to.be.true
    }
    async logoLocationInBurgerMenu() {
        const logoSelector = '.styles-module--logo--3Gocn'
        const boundingBox = await (await page.$(logoSelector)).boundingBox() 
        expect(boundingBox.x).to.be.lessThan(42)
        expect(boundingBox.y).to.be.lessThan(25) 
    }
    async logoRedirectionFromBurgerMenu() {
        const logoSelector = '.styles-module--logo--3Gocn'
        const firstSectionSelector = '.styles-module--containerHeadlineCounters--3aZY7'
        await click(page, logoSelector)
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/')
        expect(await isElementVisible(firstSectionSelector)).to.be.true
    }
    async checkThatServicesIsFirst() {
        // const servicesSelector = 'div.styles-module--mainNavigation--29RGU > a'
        // const services = await page.$(servicesSelector)
        // const href = await (await services.getProperty('href')).jsonValue() 
        const firstLinkSelector = '#menu > div:nth-child(1) > div.styles-module--mainNavigation--29RGU > a'
        const href = await (await (await page.$(firstLinkSelector)).getProperty('href')).jsonValue()
        expect(href).to.equal('https://new.rubyroidlabs.dev/services')
    }
    async servicesRedirection() {
        const linksSelector = 'div.styles-module--mainNavigation--29RGU > a'
        const links = await page.$$(linksSelector)
        await links[0].click()
        await page.waitForNavigation()
        expect(page.url()).to.equal('https://new.rubyroidlabs.dev/services')
    }
    async plusLocation() {
        const plusSelector = '.styles-module--plusFilled--2-FnC.styles-module--plusBtnSvg--1_HRH.styles-module--plusWidth--1YU82'
        const servicesLinkSelector = '#menu > div:nth-child(1) > div.styles-module--mainNavigation--29RGU > a'
        const boundingBoxServices = await (await page.$(servicesLinkSelector)).boundingBox()
        const boundingBoxPlus = await (await page.$(plusSelector)).boundingBox()
        expect(boundingBoxServices.x).to.be.lessThan(boundingBoxPlus.x)
    }
}