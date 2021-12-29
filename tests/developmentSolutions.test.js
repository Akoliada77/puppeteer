import MainPage from '../pages/MainPage'
import DevelopmentSolutions from '../elements/MainPage/DevelopmentSolutions'

describe ('Development solutions', () => {
    let mainpage 
    let developmentsolutions
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        developmentsolutions = new DevelopmentSolutions()
    })

    it('Development solutions section is displayed', async () =>{
        await mainpage.visit()
        await developmentsolutions.isSectionDisplayed()
    })
    it('Development solutions location', async () =>{
        await mainpage.visit()
        await developmentsolutions.sectionLocation()
    })
    it('title of Development solution location', async () =>{
        await mainpage.visit()
        await developmentsolutions.titleLocation()
    })
    it('title of Development solution text', async () =>{
        await mainpage.visit()
        await developmentsolutions.titleText()
    })
    it('subtitle of Development solution location', async () =>{
        await mainpage.visit()
        await developmentsolutions.subtitleLocation()
    })
    it('subtitle of Development solution text', async () =>{
        await mainpage.visit()
        await developmentsolutions.subtitleText()
    })
    it('slider of Development solution location', async () =>{
        await mainpage.visit()
        await developmentsolutions.sliderLocation()
    })
})