import { config } from 'dotenv'
config({ path: `.env.${process.env.NODE_ENV || 'development'}` })

export const { USER_NAME, PASS_WORD, LINKEDLN_URL, PAGE_SLEEP_TIME } = process.env
