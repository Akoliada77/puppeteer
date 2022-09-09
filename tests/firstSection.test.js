import MainPage from '../pages/MainPage'
import FirstSection from '../elements/MainPage/FirstSection'

describe ('Development solutions', () => {
    let mainpage 
    let firstSection
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        firstSection = new FirstSection()
    })

    it('First section is displayed', async () =>{
        await mainpage.visit()
        await firstSection.isSectionDisplayed()
    })
    it('First section location', async () =>{
        await mainpage.visit()
        await firstSection.sectionLocation()
    })
    it('First section content', async () =>{
        await mainpage.visit()
        await firstSection.sectionContent()
    })
    it('Title location', async () =>{
        await mainpage.visit()
        await firstSection.titleLocation()
    })
    it('Subtitle location', async () =>{
        await mainpage.visit()
        await firstSection.subtitleLocation()
    })
    it.skip('Subtitle text changing', async () =>{
        await mainpage.visit()
        await firstSection.subtitleChanging()
    })
    it('Subtitle text changing', async () =>{
        await mainpage.visit()
        await firstSection.countersLocation()
    })
    it.skip('Counters changing at certain intervals', async () =>{
        await mainpage.visit()
        await firstSection.countersChanging()
    })
    it('Button location', async () =>{
        await mainpage.visit()
        await firstSection.buttonLocation()
    })

})