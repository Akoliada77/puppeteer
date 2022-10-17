import OurWork from '../pages/OurWork'
import FirstSection from '../elements/OurWorkPage/FirstSection'
import CasesSection from '../elements/OurWorkPage/CasesSection'
import ContactForm from '../elements/OurWorkPage/ContactForm'

describe ('Why work with us section', () => {
    let firstSection 
    let ourWork
    let casesSection
    let contactForm
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        firstSection = new FirstSection()
        ourWork = new OurWork()
        casesSection = new CasesSection()
        contactForm = new ContactForm()
    })
    it('Check first section is displayed', async () =>{
        await ourWork.visit()
        await firstSection.isSectionDisplayed()
    })
    it('Check title text', async () =>{
        await ourWork.visit()
        await firstSection.titleText()
    })
    it('Check subTitle text', async () =>{
        await ourWork.visit()
        await firstSection.subTitleText()
    })
    it('Check that cases section is displyaed', async () =>{
        await ourWork.visit()
        await casesSection.isSectionDisplayed()
    })
    it('Check cases section content', async () =>{
        await ourWork.visit()
        await casesSection.sectionContent()
    })
    it('Check cases quantity', async () =>{
        await ourWork.visit()
        await casesSection.checkCasesQantity()
    })
    it('Check mini cases quantity', async () =>{
        await ourWork.visit()
        await casesSection.checkMiniCasesQantity()
    })
    it('Check Hire Us button location', async () =>{
        await ourWork.visit()
        await casesSection.checkHireUsButtonLocation()
    })
    it('Check link in hire us button', async () =>{
        await ourWork.visit()
        await casesSection.linkInHireUsButton()
    })
    it('Check that contact form is displayed', async () =>{
        await ourWork.visit()
        await contactForm.isSectionDisplayed()
    })
    

})
