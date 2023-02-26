import { PASS_WORD, USER_NAME } from './constant'
import { login } from './jobs/linkedLn'

login({
  password: PASS_WORD,
  username: USER_NAME,
})
