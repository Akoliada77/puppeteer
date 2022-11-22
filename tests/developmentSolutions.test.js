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
    it('Development solutions content', async () =>{
        await mainpage.visit()
        await developmentsolutions.sectionContent()
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
    it('amount of point in Development solution', async () =>{
        await mainpage.visit()
        await developmentsolutions.amountOfPoints()
    })
    it('Point titles location', async () =>{
        await mainpage.visit()
        await developmentsolutions.pointTitlesLocation()
    })
    it('Point descriptions location', async () =>{
        await mainpage.visit()
        await developmentsolutions.pointDescriptionsLocation()
    })
    
})