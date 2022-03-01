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
    it('Grid Container location', async () =>{
        await mainpage.visit()
        await gridContainer.sectionLocation()
    })
    it('Grid Container content', async () =>{
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
    it('check description block content', async () =>{
        await mainpage.visit()
        await gridContainer.descritionBlockContent()
    })
    it('check description block location', async () =>{
        await mainpage.visit()
        await gridContainer.descriptionBlockLocation()
    })
    it('RoR service block location', async () =>{
        await mainpage.visit()
        await gridContainer.rorServiceBlockLocation()
    })
    it('RoR service block content', async () =>{
        await mainpage.visit()
        await gridContainer.rorSeviceBlockContent()
    })
    it('RoR service block redirection', async () =>{
        await mainpage.visit()
        await gridContainer.rorServiceBlockRedirection()
    })
    it('Image in RoR service block location', async () =>{
        await mainpage.visit()
        await gridContainer.imageOfRorBlockLocation()
    })
    it('Title in RoR service block location', async () =>{
        await mainpage.visit()
        await gridContainer.titleOfRorBlockLocation()
    })
    it('Title in RoR service block text', async () =>{
        await mainpage.visit()
        await gridContainer.titleText()
    })
    it('Description in RoR service block location', async () =>{
        await mainpage.visit()
        await gridContainer.descriptionLocation()
    })
    it('Description in RoR service block text', async () =>{
        await mainpage.visit()
        await gridContainer.descriptionText()
    })
    it('Cwd service block location', async () =>{
        await mainpage.visit()
        await gridContainer.cwdServiceBlockLocation()()
    })
    it('Cwd service block redirection', async () =>{
        await mainpage.visit()
        await gridContainer.cwdServiceBlockRedirect()
    })
    it('Cwd service block content', async () =>{
        await mainpage.visit()
        await gridContainer.cwdServiceBlockContent()
    })
    it('Image in Cwd service block location', async () =>{
        await mainpage.visit()
        await gridContainer.imageInCwdBlockLocation()
    })
    it('Title in Cwd service block location', async () =>{
        await mainpage.visit()
        await gridContainer.titleInCwdBlockLocation()
    })
    it('Title in Cwd service block text', async () =>{
        await mainpage.visit()
        await gridContainer.titleInCwdBlockText()
    })
    

})