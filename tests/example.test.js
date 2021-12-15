import MainPage from '../pages/MainPage'

describe ('example', () => {
    let mainpage 
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        mainpage = new MainPage()
        
    })

    it('', async () =>{
        await mainpage.visit()
    })
})