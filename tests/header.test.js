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
        await header.checkLocation()
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
        await header.logoRedirecting()
    })
    
})