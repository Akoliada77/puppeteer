import MainPage from '../pages/MainPage'
import WhyWorkWithUs from '../elements/MainPage/WhyWorkWithUs'

describe ('header', () => {
    let mainpage 
    let whyworkwithus
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        whyworkwithus = new WhyWorkWithUs()
    })

    it('Header is displayed', async () =>{
        await mainpage.visit()
        await whyworkwithus.isSectionDisplayed()
    })
})