import winston from 'winston'
import { rootFile } from '../helpers'

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.colorize(),
    winston.format.printf(log => {
      if (log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`
      return `[${log.timestamp}] [${log.level}] ${log.message} ${JSON.stringify(log.data)}`
    }),
  ),
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: rootFile('infos.log'),
    }),
    new winston.transports.File({
      level: 'error',
      filename: rootFile('errors.log'),
    }),
  ],
})
export function infoLog(message: string, data: unknown) {
  return logger.log({ level: 'info', message, data })
}

export function errorLog(message: string, data: unknown) {
  return logger.log({ level: 'error', message, data })
}
