import MainPage from '../pages/MainPage'
import OurWork from '../elements/MainPage/OurWork'

describe ('Why work with us section', () => {
    let mainpage 
    let ourWork
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        ourWork = new OurWork()
    })
    it('Section is displayed', async() =>{
        await mainpage.visit()
        await ourWork.isSectionDisplayed()
    })
    it('Section location', async() =>{
        await mainpage.visit()
        await ourWork.sectionLocation()
    })
    it('Section content', async() =>{
        await mainpage.visit()
        await ourWork.sectionContent()
    })
    it('Check amount of cases', async() =>{
        await mainpage.visit()
        await ourWork.amountOfCases()
    })
    it('Check cases content', async() =>{
        await mainpage.visit()
        await ourWork.casesContent()
    })
    it('Cases redirections', async() =>{
        await mainpage.visit()
        await ourWork.firstCaseRedirect()
        await mainpage.visit()
        await ourWork.secondCaseRedirect()
        await mainpage.visit()
        await ourWork.thirdCaseRedirect()
        await mainpage.visit()
        await ourWork.fourthCaseRedirect()
        await mainpage.visit()
        await ourWork.fifthCaseRedirect()
        await mainpage.visit()
        await ourWork.sixthCaseRedirect()
        await mainpage.visit()
        await ourWork.seventhCaseRedirect()
    })
})