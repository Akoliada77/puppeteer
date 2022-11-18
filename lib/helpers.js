module.exports = {
    waitForText: async function(page, selector, text) {
        try {
            await page.waitForSelector(selector)
            await page.waitForFunction((selector, text) => {
                document.querySelector(selector).innerText.includes(text),
                   {},
                   selector,
                   text
            })
        } catch (error) {
            throw new Error('Text: ' + (text) + ' is not found in the selector: ' + (selector))
        }
    },
    shouldNotExist: async function(page, selector) {
        try {
            await page.waitForSelector(selector, {hidden: true })
        } catch (error) {
            throw new Error('Selector: ' + (selector) + ' is visible but should not be')
        }
    },
    click: async function(page, selector) {
        try{
            await page.waitForSelector(selector)
            await page.click(selector)
        } catch (error) {
            throw new Error ('Could not click on selector '+ (selector))
        }
    },
    clickOnCertainElement: async function(page, selector, number) {
        try{
            await page.waitForSelector(selector)
            const elements = await page.$$(selector)
            await elements[number].click()
        } catch (error) {
            throw new Error (`Could not click on ${number} element of ${selector} selector`)
        }
    },
    getText: async function(page, selector) {
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector, element => element.innerHTML)
        } catch (error) {
            throw new Error ('Cannot get the text from the selector ' + (selector))
        }
    },
    getTextXpath: async function(page, selector) {
        try {
            await page.waitForXPath(selector)
            const [xpath] = await page.$x(selector)
            return await page.evaluate(text => text.textContent, xpath)
        } catch (error) {
            throw new Error ('Cannot get the text from the xpath ' + (selector))
        }
    },
    getCount: async function(page, selector) {
        try {
            await page.waitForSelector(selector)
            return await page.$$eval(selector, element => element.length)
        } catch {
            throw new Error('Cannot get count of selector  '+ (selector))
        }
    },
    typeText: async function(page, selector ,text) {
        try {
            await page.waitForSelector(selector)
            await page.type(selector, text)
        } catch (error) {
            throw new Error('Could not type into selector'+ (selector))
        }
    },
    selectText: async function(page, selector) {
        try{
            await page.waitForSelector(selector)
            await page.click(selector, { clickCount: 3 })
        } catch (error) {
            throw new Error ('Could not select the text in selector '+ (selector))
        }
    },
    doubleClick: async function(page, selector) {
        try{
            await page.waitForSelector(selector)
            await page.click(selector, { clickCount: 2 })
        } catch (error) {
            throw new Error ('Could not double click on selector '+ (selector))
        }
    },
    rightClick: async function(page, selector) {
        try{
            await page.waitForSelector(selector)
            let element = await page.$(selector) 
            await element.click({
                button: 'right',
            })  
        } catch(error) {
        throw new Error ('Could not right click on selector'+ (selector))
        }
    },
    isElementVisible: async function(selector) {
        var visible = true
        await page.waitForSelector(selector, { visible: true, timeout: 3000 }).catch(function () {
            visible = 'Selector ' + (selector) + ' is not visible'
        })
        return visible
    },
    isXpathVisible: async function(selector) {
        var visible = true
        await page.waitForXPath(selector, { visible: true, timeout: 3000 }).catch(function () {
             visible = 'Xpath ' + (selector) + ' is not visible'
        })
        return visible
    },
    getTextFromCertainElement: async function(page, selector, number) {
        try {
            await page.waitForSelector(selector)
            const elm = await page.$$(selector)
            return await page.evaluate(elm => elm.textContent, elm[number])
        } catch (error) {
            throw new Error ('Cannot get the text from the selector ' + (selector))
        }
    }
}