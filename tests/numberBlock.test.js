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
    it('Section background colour', async() =>{
        await mainpage.visit()
        await numbersBlock.sectionBackgroundColour()
    })
    it('Section redirection', async() =>{
        await mainpage.visit()
        await numbersBlock.sectionRedirection()
    })
    it('Title location', async() =>{
        await mainpage.visit()
        await numbersBlock.titleLocation()
    })
    it('Title text', async() =>{
        await mainpage.visit()
        await numbersBlock.titleText()
    })
    it('Info block location', async() =>{
        await mainpage.visit()
        await numbersBlock.infoBlockLocation()
    })
    it('Info block has 4 entries', async() =>{
        await mainpage.visit()
        await numbersBlock.infoBlockContent()
    })
    it('Entrie titles content', async() =>{
        await mainpage.visit()
        await numbersBlock.entriesTitleContent()
    })
    it('Entrie texts content', async() =>{
        await mainpage.visit()
        await numbersBlock.entriesTextsContent()
    })
    it('Entrie titles are bold', async() =>{
        await mainpage.visit()
        await numbersBlock.entrieTitlesAreBold()
    })
})