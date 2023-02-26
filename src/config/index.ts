import * as webdriver from 'selenium-webdriver'
require('chromedriver')

export const driver = async (): Promise<webdriver.ThenableWebDriver> => {
  return new webdriver.Builder().forBrowser('chrome').build()
}
