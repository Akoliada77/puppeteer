import OurWork from '../pages/OurWork'
import FirstSection from '../elements/OurWorkPage/FirstSection'

describe ('Why work with us section', () => {
    let firstSection 
    let ourWork
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        firstSection = new FirstSection()
        ourWork = new OurWork()
    })
    it('Check first section is displayed', async () =>{
        await ourWork.visit()
        await firstSection.isSectionDisplayed()
    })
    it('Check title text', async () =>{
        await ourWork.visit()
        await firstSection.titleText()
    })
    it('Check subTitle text', async () =>{
        await ourWork.visit()
        await firstSection.subTitleText()
    })
    it('Check that cases section is displyaed', async () =>{
        await ourWork.visit()
        await casesSection.isSectionDisplayed()
    })
    it('Check cases section content', async () =>{
        await ourWork.visit()
        await casesSection.sectionContent()
    })

})
