const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import Contactpage from '../../pages/ContactPage'

// variables for the section
var sectionSelector = '.styles-module--container--xr8Zs'
var emailSelector = '.styles-module--email--qs944'
var titleSelector = '.styles-module--title--ADNIE'
var socialLinksSelector = '.styles-module--links--YebAu'


export default class OurOffices {

    async isSectionDisplayed() {
        expect(await isElementVisible(sectionSelector)).to.be.true
    }

}