import ContactPage from '../pages/ContactPage'
import MainSection from '../elements/ContactPage/MainSection'

describe ('Contact Form', () => {
    let contactpage 
    let mainsection
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        contactpage = new ContactPage()
        mainsection = new MainSection()
    })
    it('Section is displayed', async() =>{
        await contactpage.visit()
        await mainsection.isSectionDisplayed()
    })
})