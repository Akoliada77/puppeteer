import WeAreHiring from '../pages/WeAreHiring'
import FirstSection from '../elements/WeAreHiringPage/FirstSection'


describe ('Why work with us section', () => {
    let firstSection 
    let wearehiring
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        firstSection = new FirstSection()
        wearehiring = new WeAreHiring()
    })
    it('Check first section is displayed', async () =>{
        await wearehiring.visit()
        await firstSection.isSectionDisplayed()
    })
    it('Check section content', async() =>{
        await wearehiring.visit()
        await firstSection.sectionContent()
    })
    it('Check text in the title of section', async() =>{
        await wearehiring.visit()
        await firstSection.titleText()
    })
    it('Check text in the subtitle of section', async() =>{
        await wearehiring.visit()
        await firstSection.subTitleText()
    })
})