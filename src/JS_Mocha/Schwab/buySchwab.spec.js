// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Buy_Schwab', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Buy_Schwab', async function() {
    vars["TICKER"] = "TICKERHERE"
    await driver.get("https://client.schwab.com/app/trade/tom/#/trade")
    vars["target"] = await driver.executeScript("return \"SLICE_TARGET\"")
    vars["numb"] = await driver.executeScript("let list = [\"0\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\",\"10\",\"11\",\"12\",\"13\"]; list = list.slice(list.indexOf(arguments[0]) + 1); return list;", vars["target"])
    const collection = vars["numb"]
    for (let i = 0; i < collection.length - 1; i++) {
      vars["account"] = vars["numb"][i]
      await driver.sleep(1250)
      await driver.findElement(By.id("mcAccountSelector")).click()
      await driver.sleep(1500)
      await driver.findElement(By.xpath("//a[@id=\'brokerage-acc-vars[\"account\"]\']/span")).click()
      await driver.sleep(2500)
      await driver.findElement(By.id("_txtSymbol")).sendKeys(vars["TICKER"])
      await driver.sleep(1500)
      await driver.findElement(By.id("_txtSymbol")).sendKeys(Key.ENTER)
      await driver.sleep(1500)
      await driver.findElement(By.id("_action")).click()
      {
        const dropdown = await driver.findElement(By.id("_action"))
        await dropdown.findElement(By.xpath("//option[. = 'Buy']")).click()
      }
      await driver.findElement(By.id("order-type")).click()
      {
        const dropdown = await driver.findElement(By.id("order-type"))
        await dropdown.findElement(By.xpath("//option[. = 'Market']")).click()
      }
      await driver.findElement(By.css(".mcaio-order--reviewbtn")).click()
      await driver.sleep(1250)
      await driver.findElement(By.id("mtt-place-button")).click()
      await driver.findElement(By.css(".mcaio--mcaio-cta-buttons-anothertrade")).click()
    }
  })
})
