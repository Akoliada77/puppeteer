import MainPage from '../pages/MainPage'
import WhyWorkWithUs from '../elements/MainPage/WhyWorkWithUs'

describe ('Why work with us section', () => {
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
    it('Section location', async () =>{
        await mainpage.visit()
        await whyworkwithus.sectionlocation()
    })
    it('Section content', async () =>{
        await mainpage.visit()
        await whyworkwithus.sectionContent()
    })
    it('Title location', async () =>{
        await mainpage.visit()
        await whyworkwithus.titleLocation()
    })
    it('Title text', async () =>{
        await mainpage.visit()
        await whyworkwithus.titleText()
    })
})