import MainPage from '../pages/MainPage'
import NumbersBlock from '../elements/MainPage/NumbersBlock'

describe ('Why work with us section', () => {
    let mainpage 
    let numbersBlock
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        numbersBlock = new NumbersBlock()
    })
    it('Section is displayed', async() =>{
        await mainpage.visit()
        await numbersBlock.isSectionDisplayed()
    })
    it('Section content', async() =>{
        await mainpage.visit()
        await numbersBlock.sectionContent()
    })
})