
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('click draw button and it displays div', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices =  await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('add to duo', async  () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
    const playerDuo =  await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})

test('check remove duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
    await driver.findElement(By.xpath('(//button[text()="Remove from Duo"])[1]')).click()
    const returned = await driver.findElement(By.xpath('//div[@class="bot-card outline"][5]'))
    const displayed = await returned.isDisplayed()
    expect(displayed).toBe(true)
})