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
})