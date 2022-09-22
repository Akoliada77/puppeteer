import ContactPage from '../pages/ContactPage'
import MainSection from '../elements/ContactPage/MainSection'
import GridContainerContact from '../elements/ContactPage/GridContainerContact'

describe ('Contact Form', () => {
    let contactpage 
    let mainsection
    let gridcontainercontact
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        contactpage = new ContactPage()
        mainsection = new MainSection()
        gridcontainercontact = new GridContainerContact()
    })
    it('Section is displayed', async() =>{
        await contactpage.visit()
        await mainsection.isSectionDisplayed()
    })
    it('Check title of Contact page', async () =>{
        await contactpage.visit()
        await mainsection.textOfTitle()
    })
    it('Check subtitle of Contact page', async () =>{
        await contactpage.visit()
        await mainsection.textOfSubtitles()
    })
    it('Check that first question is displayed', async () =>{
        await contactpage.visit()
        await mainsection.firstQuestionIsDisplayed()
    })
    it('Check href tag in links', async () =>{
        await contactpage.visit()
        await gridcontainercontact.checkSocialLinks()
    })
    it('Grid container is displayed', async () =>{
        await contactpage.visit()
        await gridcontainercontact.isSectionDisplayed()
    })
    it('Check email is correct', async () =>{
        await contactpage.visit()
        await gridcontainercontact.correctEmailDisplayed()
    })

})