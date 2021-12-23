import MainPage from '../pages/MainPage'
import GridContainer from '../elements/MainPage/GridContainer'

describe ('header', () => {
    let mainpage 
    let gridContainer
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        gridContainer = new GridContainer()
    })

    it('Grid Container is displayed', async () =>{
        await mainpage.visit()
        await gridContainer.isSectionDisplayed()
    })
    it('check Grid Container location', async () =>{
        await mainpage.visit()
        await gridContainer.sectionLocation()
    })
    it('check Grid Container content', async () =>{
        await mainpage.visit()
        await gridContainer.sectionContent()
    })
})