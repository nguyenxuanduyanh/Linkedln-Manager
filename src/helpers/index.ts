import path from 'path'
import type { WebDriver, WebElement } from 'selenium-webdriver'
import { By, until } from 'selenium-webdriver'

export const visitUrl = async (driver: WebDriver, url: string) => {
  return await driver.get(url)
}

export const quitSession = async (driver: WebDriver) => {
  return await driver.quit()
}

export const findElementById = async (driver: WebDriver, id: string) => {
  await driver.wait(until.elementLocated(By.id(id)), 15000, 'Looking for element')
  return await driver.findElement(By.id(id))
}

export const findElementByClassName = async (driver: WebDriver, name: string) => {
  await driver.wait(until.elementLocated(By.className(name)), 15000, 'Looking for element')
  return await driver.findElement(By.className(name))
}

export const write = async (el: WebElement, text: string) => {
  return await el.sendKeys(text)
}

export const quit = async (driver: WebDriver) => {
  return await driver.quit()
}

export const rootFile = (filename: string) => {
  return path.resolve(process.cwd(), filename)
}
