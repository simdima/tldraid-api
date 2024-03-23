import * as winston from 'winston';
import { Request, Response } from 'express';

const loggerConfig: winston.LoggerOptions = {
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.prettyPrint(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm' }),
        winston.format.printf(
          ({ timestamp, context, level, message }) =>
            `${timestamp} [${context || ''}] ${level}: ${message} `
        )
      ),
    }),
  ],
};

export const getHttpRequestInfo = (
  { method, path }: Request,
  { statusCode }: Response
) => `${method} ${path} [${statusCode}]`;

export default loggerConfig;
