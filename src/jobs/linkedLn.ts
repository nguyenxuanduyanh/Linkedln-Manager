import type { LoginLinkedLn } from '../types'
import { driver } from '../config'
import { findElementByClassName, findElementById, quit, visitUrl, write } from '../helpers'
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
    await write(usernameInput, input.username)
    await write(passwordInput, input.password)
    await signInButton.click()
    await page.sleep(60000)
  } catch (error) {
    errorLog('Login fail', error)
  } finally {
    await quit(page)
  }
}
