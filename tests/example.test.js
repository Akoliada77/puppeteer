import MainPage from '../pages/MainPage'
import FirstSection from '../elements/MainPage/FirstSection'
import Header from '../elements/MainPage/Header'

describe ('example', () => {
    let mainpage 
    let firstSection
    let header
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        firstSection = new FirstSection()
        header = new Header()
    })

    it('', async () =>{
        await mainpage.visit()
        await header.logoRedirecting()
    })
})