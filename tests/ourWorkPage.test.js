import OurWork from '../pages/OurWork'
import FirstSection from '../elements/OurWorkPage/FirstSection'

describe ('Why work with us section', () => {
    let firstSection 
    let ourWork
   
    jest.setTimeout(40000)

    beforeAll(async() =>{
        firstSection = new FirstSection()
        ourWork = new OurWork()
    })
})