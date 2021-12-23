import MainPage from '../pages/MainPage'
import GridContainer from '../elements/MainPage/GridContainer'

describe ('Grid Container', () => {
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
    it('check image location', async () =>{
        await mainpage.visit()
        await gridContainer.imageLocation()
    })
    it('check image block has image', async () =>{
        await mainpage.visit()
        await gridContainer.imageBlockHasImage()
    })
    it('check text block location', async () =>{
        await mainpage.visit()
        await gridContainer.textBlockLocation()
    })
    it('check text block has text', async () =>{
        await mainpage.visit()
        await gridContainer.checkThatTextBlockHasText()
    })

})