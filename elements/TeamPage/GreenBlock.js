const { click, doubleClick, getCount, getText, getTextXpath, rightClick, selectText, shouldNotExist, typeText, isElementVisible, isXpathVisible } = require('../../lib/helpers')
const { generateEmail, generateID, generateNumbers } = require('../../lib/utils')
import { expect, use } from 'chai'
import TeamPage from '../../pages/TeamPage'

let teampage

// variables for the section
var sectionSelector = '.styles-module--greenBlock--EHgdl'
var titleSelector = '.styles-module--title--dsH4E'
var subTitleSelector = '.styles-module--subTitle--alz9U'
var imageSelector = '.gatsby-image-wrapper.gatsby-image-wrapper-constrained.styles-module--image--PVE0H'
var breadCrumbsSelector = '.breadcrumb'

teampage = new TeamPage()

export default class GreenBlock {
    async isSectionDisplayed() {
        await isElementVisible(sectionSelector).to.be.true
    }

}