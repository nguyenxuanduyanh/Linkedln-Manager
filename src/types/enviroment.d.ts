export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USER_NAME: string
      PASS_WORD: string
      LINKEDLN_URL: string
    }
  }
}
