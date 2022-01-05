import MainPage from '../pages/MainPage'
import FirstSection from '../elements/MainPage/FirstSection'

describe ('Development solutions', () => {
    let mainpage 
    let firstsection
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        firstsection = new FirstSection()
    })

    it('First section is displayed', async () =>{
        await mainpage.visit()
        await firstsection.isSectionDisplayed()
    })
    it('First section location', async () =>{
        await mainpage.visit()
        await firstsection.sectionLocation()
    })
    it('First section content', async () =>{
        await mainpage.visit()
        await firstsection.sectionContent()
    })
    it('Title location', async () =>{
        await mainpage.visit()
        await firstsection.titleLocation()
    })
    it('Subtitle location', async () =>{
        await mainpage.visit()
        await firstsection.subtitleLocation()
    })

})