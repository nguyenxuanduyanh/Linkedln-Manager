import * as webdriver from 'selenium-webdriver'
import randomUserAgent from 'random-useragent'
require('chromedriver')

export const driver = async (): Promise<webdriver.ThenableWebDriver> => {
  const userAgent = randomUserAgent.getRandom()
  const chromeCapabilities = webdriver.Capabilities.chrome().set('user-agent', userAgent)
  return new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build()
}
