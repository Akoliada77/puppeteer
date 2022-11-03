import TeamPage from '../pages/TeamPage'
import FirstSection from '../elements/TeamPage/FirstSection'
import GreenBlock from '../elements/TeamPage/GreenBlock'

describe ('Why work with us section', () => {
    let teampage 
    let firstSection
    let greenBlock
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        firstSection = new FirstSection()
        teampage = new TeamPage()
        greenBlock = new GreenBlock()

    })
    it('Check first section is displayed', async () =>{
        await teampage.visit()
        await firstSection.isSectionDisplayed()
    })
    it('Check first section content', async () =>{
        await teampage.visit()
        await firstSection.sectionContent()
    })
    it('Check first section content', async () =>{
        await teampage.visit()
        await greenBlock.isSectionDisplayed()
    })
})