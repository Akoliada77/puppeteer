import ContactPage from '../pages/ContactPage'
import MainSection from '../elements/ContactPage/MainSection'
import GridContainerContact from '../elements/ContactPage/GridContainerContact'
import OurOffices from '../elements/ContactPage/OurOffices'

describe ('Contact Form', () => {
    let contactpage 
    let mainsection
    let gridcontainercontact
    let ouroffices
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        contactpage = new ContactPage()
        mainsection = new MainSection()
        gridcontainercontact = new GridContainerContact()
        ouroffices = new OurOffices()
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
    it('Check that our offices section displayed', async () =>{
        await contactpage.visit()
        await ouroffices.isSectionDisplayed()
    })
    it('Check text of our offices title', async () =>{
        await contactpage.visit()
        await ouroffices.titleContent()
    })
    it('Check content location of our offices section', async () =>{
        await contactpage.visit()
        await ouroffices.contentLocation()
    })
    it('Check that 2 offices are displayed', async () =>{
        await contactpage.visit()
        await ouroffices.checkAmountOfOffices()
    })
    it('Check that image is displayed', async () =>{
        await contactpage.visit()
        await ouroffices.imageIsDisplayed()
    })
    it('Check image location', async () =>{
        await contactpage.visit()
        await ouroffices.imageLocation()
    })
    it('Check content of offices addresses', async () =>{
        await contactpage.visit()
        await ouroffices.addressesContent()
    })
})
