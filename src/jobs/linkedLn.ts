import type { LoginLinkedLn } from '../types'
import { driver } from '../config'
import {
  findElementByClassName,
  findElementById,
  quit,
  visitUrl,
  writeWithDelay,
} from '../helpers'
import { LINKEDLN_URL } from '../constant'
import { infoLog, errorLog } from '../config/logger'

export const login = async (input: LoginLinkedLn) => {
  const page = await driver()
  try {
    infoLog('Login to LinkedLn', input)
    await visitUrl(page, LINKEDLN_URL)
    const usernameInput = await findElementById(page, 'session_key')
    const passwordInput = await findElementById(page, 'session_password')
    const signInButton = await findElementByClassName(page, 'sign-in-form__submit-button')
    await writeWithDelay(page, usernameInput, input.username, 100)
    await writeWithDelay(page, passwordInput, input.password, 100)
    await page.sleep(500)
    await signInButton.click()
    await page.sleep(10000)
  } catch (error) {
    errorLog('Login fail', error)
  } finally {
    await quit(page)
  }
}
