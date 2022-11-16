import TeamPage from '../pages/TeamPage'
import FirstSection from '../elements/TeamPage/FirstSection'
import GreenBlock from '../elements/TeamPage/GreenBlock'
import OurStory from '../elements/TeamPage/OurStory'

describe ('Why work with us section', () => {
    let teampage 
    let firstSection
    let greenBlock
    let ourStory
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        firstSection = new FirstSection()
        teampage = new TeamPage()
        greenBlock = new GreenBlock()
        ourStory = new OurStory()

    })
    it('Check first section is displayed', async () =>{
        await teampage.visit()
        await firstSection.isSectionDisplayed()
    })
    it('Check first section content', async () =>{
        await teampage.visit()
        await firstSection.sectionContent()
    })
    it('Check that green block is displayed', async () =>{
        await teampage.visit()
        await greenBlock.isSectionDisplayed()
    })
    it('Check green block content', async () =>{
        await teampage.visit()
        await greenBlock.sectionContent()
    })
    it('Check that our story section is displayed', async () =>{
        await teampage.visit()
        await ourStory.isSectionDisplayed()
    })
    it('Check our story section title', async () =>{
        await teampage.visit()
        await ourStory.titleContent()
    })
    it('Check our story content location', async () =>{
        await teampage.visit()
        await ourStory.contentLocation()
    })
    it('Check customer logos amount', async () =>{
        await teampage.visit()
        await ourStory.logosAmount()
    })
})