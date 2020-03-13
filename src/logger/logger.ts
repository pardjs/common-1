import { resolve } from "path";
import * as winston from "winston";
import { LOG_PATH } from "../constants/index";
// tslint:disable-next-line:no-var-requires
require("winston-daily-rotate-file");
const logPath = resolve(LOG_PATH || "./logs");
const transportInfo = new (winston.transports as any).DailyRotateFile({
  datePattern: "YYYY-MM-DD",
  filename: `${logPath}/${process.env.HOSTNAME}-log-%DATE%.log`,
  level: "info",
  maxFiles: "14d",
  maxSize: "20m",
  zippedArchive: true,
});

const transportError = new (winston.transports as any).DailyRotateFile({
  datePattern: "YYYY-MM-DD",
  filename: `${logPath}/${process.env.HOSTNAME}-error-%DATE%.log`,
  level: "error",
  maxFiles: "14d",
  maxSize: "20m",
  zippedArchive: true,
});

const logger = winston.createLogger({
  defaultMeta: { service: "common", hostname: process.env.HOSTNAME },
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  level: "info",
  transports: [transportError, transportInfo],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.timestamp(),
      ),
    }),
  );
}

logger.info(`log will be dumped into ${logPath}`);

export { logger };

// TODO: log rotate
