import MainPage from '../pages/MainPage'
import FirstSection from '../elements/MainPage/FirstSection'

describe ('example', () => {
    let mainpage 
    let firstSection
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        firstSection = new FirstSection()
    })

    it('', async () =>{
        await mainpage.visit()
        await firstSection.isSectionDisplayed()
        await firstSection.areDirectionCountersDisplayed()
    })
})