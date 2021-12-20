import MainPage from '../pages/MainPage'
import Header from '../elements/MainPage/Header'

describe ('header', () => {
    let mainpage 
    let header
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        header = new Header()
    })

    it('Header is displayed', async () =>{
        await mainpage.visit()
        await header.isSectionDisplayed()
    })
    it('Header location', async () =>{
        await mainpage.visit()
        await header.headerLocation()
    })
    it('Content of Section', async () =>{
        await mainpage.visit()
        await header.checkSectionContent()
    })
    it('Logo location', async () =>{
        await mainpage.visit()
        await header.logoLocation()
    })
    it('Logo redirection', async () =>{
        await mainpage.visit()
        await header.logoRedirection()
    })
    it('RoR link redirection', async () =>{
        await mainpage.visit()
        await header.rorLinkRedirect()
    })
    it('Contact link redirection', async () =>{
        await mainpage.visit()
        await header.contactLinkRedirect()
    })
    it('Arrow location', async () =>{
        await mainpage.visit()
        await header.contactUsArrowToTheRight()
    })
    it('Burger Menu location', async () =>{
        await mainpage.visit()
        await header.burgerMenuLocation()
    })
    it('Opening burger menu', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
    })
    it('Burger Menu content', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
        await header.modalWindowContent()
    })
    it('Check that Services link is located first', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
        await header.checkThatServicesIsFirst()
    })
    it('Services redirection', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
        await header.servicesRedirection()
    })
    it('Plus location', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
        await header.plusLocation()
    })
    it('Plus opening', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
        await header.plusOpening()
    })
    it('Our Work link redirection', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
        await header.ourWorkRedirection()
    })
    it('Clients link redirection', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
        await header.clientsRedirection()
    })
    it('Team link redirection', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
        await header.teamRedirection()
    })
    it('Blog link redirection', async () =>{
        await mainpage.visit()
        await header.burgerMenuOpening()
        await header.blogRedirection()
    })


})